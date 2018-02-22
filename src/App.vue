<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/common/Header'

export default {
  name: 'App',
  components: {
    AppHeader: Header
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
