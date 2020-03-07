import djSelect from './main.vue';

/* istanbul ignore next */
djSelect.install = function(Vue) {
  Vue.component(djSelect.name, djSelect);
};

export default djSelect;