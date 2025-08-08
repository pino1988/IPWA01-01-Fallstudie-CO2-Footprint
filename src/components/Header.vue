<script setup lang="ts">
import { ref } from 'vue'

const active = ref<'home' | 'data' | 'about'>('home')
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light border-bottom">
      <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
          <!-- Platzhalter-Logo -->
          <span class="d-inline-block rounded-circle bg-success" style="width:24px;height:24px;"></span>
          <span>CO<sub>2</sub>-Footprint</span>
        </a>

        <!-- Mobile Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav -->
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: active==='home' }" href="#">Start</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: active==='data' }" href="#">Daten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: active==='about' }" href="#">Methodik</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-toggler {
  border: none;
}
</style>
