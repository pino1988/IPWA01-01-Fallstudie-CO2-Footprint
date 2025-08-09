<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CO2Table from './components/co2Table.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-grow-1 container-fluid py-3">
      <div class="row">
        <section class="col">
          <CO2Table />
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
