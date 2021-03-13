<template>
  <div id="app">
    <div id="nav">
      <the-header></the-header>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
