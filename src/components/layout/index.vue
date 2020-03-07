<template>
  <div class="layout full-box">
    <base-menu></base-menu>
  </div>
</template>

<script>
import baseMenu from './baseMenu';
export default {
  name: 'layout',
  components: {
    baseMenu
  }
};
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
}
</style>