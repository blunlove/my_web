import djItemBox from './main.vue';

/* istanbul ignore next */
djItemBox.install = function(Vue) {
  Vue.component(djItemBox.name, djItemBox);
};

export default djItemBox;