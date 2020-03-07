import djGridBox from './main.vue';

/* istanbul ignore next */
djGridBox.install = function(Vue) {
  Vue.component(djGridBox.name, djGridBox);
};

export default djGridBox;