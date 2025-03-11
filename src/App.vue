<!-- App.vue -->
<template>
  <div class="app">
    <nav-bar />
    <main>
      <router-view></router-view>
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue'; 
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>