import djForm from './src/main';
// import wordsCount from './src/wordsCount';
const {
  Form,
  FormItem
} = require('element-ui');

djForm.install = function (Vue) {
  Vue.component(djForm.name, djForm);
  // Vue.component(wordsCount.name, wordsCount);
  Vue.use(Form);
  Vue.use(FormItem);
};
export default djForm;
