<script setup lang="ts">
import LocalMenu from '../components/LocalMenu.vue'
import CO2Table from '../components/CO2Table.vue'
</script>

<template>
  <div class="row">
    <aside class="d-none d-md-block col-md-3">
      <LocalMenu />
    </aside>

    <section class="col-12 col-md-9">
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 id="intro" class="h3 mb-3">Einführung</h1>
          <p>
            Der Klimawandel zählt zu den zentralen Herausforderungen unserer Zeit und betrifft Politik,
            Wirtschaft und Gesellschaft gleichermaßen. Eine wirksame Auseinandersetzung mit diesem Thema
            setzt verlässliche und nachvollziehbare Daten zu CO₂-Emissionen voraus. Erst wenn Staaten und
            Unternehmen ihre Emissionen offenlegen, entsteht die notwendige Transparenz, um fundierte
            Entscheidungen und sachliche Diskussionen zu ermöglichen.
          </p>
          <p class="mb-0">
            Diese Website stellt relevante Emissionsdaten klar und offen dar. Ziel ist es, durch einheitliche
            Erfassung und Vergleichbarkeit zur Regulierung des CO₂-Ausstoßes beizutragen und eine
            kontinuierliche Reduktion zu unterstützen.
          </p>
          <h2 id="data" class="h4 mt-4">CO<sub>2</sub>-Emissionsdaten</h2>
        </div>
      </div>
      <CO2Table />
    </section>
  </div>
</template>
