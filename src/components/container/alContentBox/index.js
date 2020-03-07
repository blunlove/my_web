import djContentBox from './main.vue';

/* istanbul ignore next */
djContentBox.install = function(Vue) {
  Vue.component(djContentBox.name, djContentBox);
};

export default djContentBox;