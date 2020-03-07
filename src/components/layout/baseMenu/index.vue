<template>
  <div class="base-menu">  
    <div class="base-menu-content">
      <div class="base-menu-content-item" v-for="item in config" @click="gotoRoute(item)">
        <i :class="['icon', item.icon]"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseMenu',
  data() {
    return {
      config: [
        {
          icon: 'fa fa-bolt',
          path: 'index',
        },
        {
          icon: 'fa fa-keyboard-o',
          path: 'about',
        },
        {
          icon: 'fa fa-rocket',
          path: 'index',
        },
        {
          icon: 'fa fa-dribbble',
          path: 'index',
        },
        {
          icon: 'fa fa-plus-circle',
          path: 'index',
        },
      ]
    }
  },
  methods: {
    gotoRoute(item) {
      if (this.$route.path === '/' + item.path) return;
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="less" scoped>
.base-menu {
  display: inline-flex;
  width: 10%;
  height: 100%;
  align-items: center;
  &-content {
    flex: 1;
    text-align: center;
    &-item {
      display: block;
      padding: 30px 0;
      &:hover {
        .icon {
          opacity: 0.8;
          transform: scale(1.8);
        }
      }
      .icon {
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        transition: all 0.5s;
        // transition-delay: 0.25s;
      }
    }
  }
}
</style>