<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light border-bottom fixed-top">
      <div class="container-fluid">

        <!-- Brand -->
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.svg" alt="Logo" width="30" height="30" class="me-2" />
          <span>CO<sub>2</sub>-Footprint</span>
        </router-link>

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse nav -->
        <div id="mainNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#data' }">
                Daten
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>
