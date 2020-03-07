import djSelectBox from './main.vue';

/* istanbul ignore next */
djSelectBox.install = function(Vue) {
  Vue.component(djSelectBox.name, djSelectBox);
};

export default djSelectBox;