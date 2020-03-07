import djRadio from './main.vue';

/* istanbul ignore next */
djRadio.install = function(Vue) {
  Vue.component(djRadio.name, djRadio);
};

export default djRadio;