<script setup lang="ts">
import { computed } from 'vue'
const isRtl = computed(() => document?.documentElement?.dir === 'rtl')
</script>

<template>
  <nav class="nav flex-column gap-1 pt-2" :class="isRtl ? 'order-md-1 text-md-end' : 'order-md-0 text-md-start'">
    <a class="nav-link" href="#home">Einführung</a>
    <a class="nav-link" href="#data">CO<sub>2</sub>-Emissionsdaten</a>
  </nav>
</template>
