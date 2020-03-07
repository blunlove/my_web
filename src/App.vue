<template>
  <div class="full-box" id="app">
    <layout></layout>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import layout from '@/components/layout';
export default {
  components: {
    layout
  }
}
</script>

<style lang="less" scoped>
#app {
  min-width: 1200px;
  min-height: 600px;
  background-image: url('/image/background.jpg');
}
</style>
