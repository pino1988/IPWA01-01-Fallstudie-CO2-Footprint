<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Co2Record } from '../types/co2'
import { loadCo2Data } from '../services/co2DataService'

// --- State
const rows = ref<Co2Record[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const q = ref('')
const category = ref<'all' | 'country' | 'company'>('all')

// Sortierzustand
type SortKey = 'entity' | 'category' | 'year' | 'emissions'
const sortKey = ref<SortKey>('entity')
const sortDir = ref<'asc' | 'desc'>('asc')

// --- Utils
function sanitize(input: string): string {
  return input.replace(/[&<>"'`=\/]/g, s => (
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'} as any)[s]
  ));
}

function setSort(key: SortKey) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

const filtered = computed(() => {
  const needle = sanitize(q.value).toLowerCase().trim()
  return rows.value.filter(r => {
    const catOk = category.value === 'all' ? true : r.category === category.value
    const textOk = needle === '' ? true : r.entity.toLowerCase().includes(needle)
    return catOk && textOk
  })
})

const sorted = computed(() => {
  const arr = [...filtered.value]
  arr.sort((a, b) => {
    const dir = sortDir.value === 'asc' ? 1 : -1
    let av: number | string, bv: number | string
    switch (sortKey.value) {
      case 'entity':    av = a.entity;    bv = b.entity;    break
      case 'category':  av = a.category;  bv = b.category;  break
      case 'year':      av = a.year;      bv = b.year;      break
      case 'emissions': av = a.emissions; bv = b.emissions; break
    }
    if (typeof av === 'string' && typeof bv === 'string') {
      return av.localeCompare(bv) * dir
    }
    return ((av as number) - (bv as number)) * dir
  })
  return arr
})

onMounted(async () => {
  try {
    rows.value = await loadCo2Data()
  } catch (e: any) {
    error.value = e?.message ?? 'Unbekannter Fehler'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">Emissionstabelle</h5>

      <!-- Filterleiste -->
      <form class="row g-2 align-items-end mb-3" @submit.prevent>
        <div class="col-12 col-md-6">
          <label class="form-label" for="q">Suche (Land/Unternehmen)</label>
          <input id="q" v-model="q" type="text" class="form-control" placeholder="z. B. Schweiz oder Contoso" />
        </div>
        <div class="col-12 col-md-3">
          <label class="form-label" for="cat">Kategorie</label>
          <select id="cat" v-model="category" class="form-select">
            <option value="all">Alle</option>
            <option value="country">Länder</option>
            <option value="company">Unternehmen</option>
          </select>
        </div>
      </form>

      <!-- Status -->
      <div v-if="loading" class="text-muted">Lade Daten…</div>
      <div v-else-if="error" class="text-danger">{{ error }}</div>

      <!-- Tabelle -->
      <div v-else class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">
                <button class="btn btn-link p-0" @click="setSort('entity')">Name</button>
              </th>
              <th scope="col" class="d-none d-md-table-cell">
                <button class="btn btn-link p-0" @click="setSort('category')">Kategorie</button>
              </th>
              <th scope="col" class="d-none d-lg-table-cell">Sektor</th>
              <th scope="col">
                <button class="btn btn-link p-0" @click="setSort('year')">Jahr</button>
              </th>
              <th scope="col">
                <button class="btn btn-link p-0" @click="setSort('emissions')">Emissionen (tCO₂e)</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in sorted" :key="r.id">
              <td>{{ r.entity }}</td>
              <td class="d-none d-md-table-cell">{{ r.category === 'country' ? 'Land' : 'Unternehmen' }}</td>
              <td class="d-none d-lg-table-cell">{{ r.sector ?? '–' }}</td>
              <td>{{ r.year }}</td>
              <td>{{ r.emissions.toLocaleString() }}</td>
            </tr>
            <tr v-if="sorted.length === 0">
              <td colspan="5" class="text-muted">Keine passenden Einträge.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
