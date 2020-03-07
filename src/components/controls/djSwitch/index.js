import djSwitch from './main.vue';

/* istanbul ignore next */
djSwitch.install = function(Vue) {
  Vue.component(djSwitch.name, djSwitch);
};

export default djSwitch;