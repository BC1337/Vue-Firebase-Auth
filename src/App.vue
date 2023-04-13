<template>
  <DarkMode />
  <Navbar />
  <router-view/>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import DarkMode from './components/DarkMode.vue'
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
