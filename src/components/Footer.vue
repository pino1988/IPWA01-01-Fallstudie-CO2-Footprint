<template>
  <footer class="bg-light border-top mt-5 py-3">
    <div class="container d-flex flex-wrap gap-3 justify-content-between">
      <small>&copy; {{ new Date().getFullYear() }} Climate Transparency NPO</small>
      <ul class="nav ms-auto">
        <li class="nav-item"><router-link class="nav-link px-2" to="/imprint">Imprint</router-link></li>
        <li class="nav-item"><router-link class="nav-link px-2" to="/privacy">Privacy</router-link></li>
      </ul>
    </div>
  </footer>
</template>
