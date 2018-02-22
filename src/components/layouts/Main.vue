<template>
  <div class="site-content">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.site-content{
  margin-top: 75px;
  margin-bottom: 25px;
  height: 100%;
}
</style>
