<template>
  <!--<div class="flex-box dj-flex dj-layout-container">-->
  <!--<div class="dj-flex dj-flex-1 dj-layout-main">-->
  <div class="">
    <slot></slot>
  </div>
  <!--</div>-->
  <!--</div>-->
</template>

<script>
  // import boxHeader from './boxHeader.vue';
  // import scrollBox from '../djScrollBox';
  import {listenerPolicy} from 'djcpsweb-utils';

  export default {
    name: 'dj-content-box',
    props: {
      title: {
        default: null,
      },
    },
    mixins: [listenerPolicy],
    mounted() {
      // this.testHeight();
      // this.addListener(window, 'resize', () => {
      //   this.testHeight();
      // });
    },
    methods: {
      // testHeight() {
      //   let margin = 20;
      //   let minHeight = this.$el.offsetHeight - margin * 2;
      //   Object.assign(this.$refs.inside.style, {
      //     'margin': `${margin}px`,
      //     'min-height': `${minHeight}px`,
      //   });
      // },
    },
    components: {
      // boxHeader,
      // scrollBox,
    },
  };
</script>
