import djCascader from './main.vue';

/* istanbul ignore next */
djCascader.install = function(Vue) {
  Vue.component(djCascader.name, djCascader);
};

export default djCascader;
