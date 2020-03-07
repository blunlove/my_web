import djWaterfallBox from './main.vue';

/* istanbul ignore next */
djWaterfallBox.install = function(Vue) {
  Vue.component(djWaterfallBox.name, djWaterfallBox);
};

export default djWaterfallBox;