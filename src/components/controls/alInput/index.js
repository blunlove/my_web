import djInput from './main.vue';

/* istanbul ignore next */
djInput.install = function(Vue) {
  Vue.component(djInput.name, djInput);
};

export default djInput;