<template>
  <div class="fullbox" id="app">
    <layout></layout>
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
  background-color: #483d8b;
  // background-image: url('/image/background.jpg');
}
</style>
