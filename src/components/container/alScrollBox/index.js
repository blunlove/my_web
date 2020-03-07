import djScrollBox from './main.vue';

/* istanbul ignore next */
djScrollBox.install = function(Vue) {
  Vue.component(djScrollBox.name, djScrollBox);
};

export default djScrollBox;