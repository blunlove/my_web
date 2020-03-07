
import djDialog from './src/main.vue';

djDialog.install = function (Vue) {
  Vue.component(djDialog.name, djDialog);
};

export default djDialog;
