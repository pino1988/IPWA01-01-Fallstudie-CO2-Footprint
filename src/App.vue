<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="container my-4" id="home">
    <router-view />
  </main>
  <Footer />
</template>