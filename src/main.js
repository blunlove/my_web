import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import elementUI from 'element-ui';
import components from './components';
import './assets/css/index.less';

Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(components);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
