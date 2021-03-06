import Vue from 'vue';
import VueRouter from 'vue-router';
import _import from './_import';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: 'views/index',
  },
  {
    path: '/baidu',
    component: 'views/baidu',
  },
  {
    path: '/craft',
    component: 'views/craft',
  },
].map(route => {
  route.component = _import(route.component);
  return route;
});

const router = new VueRouter({
  routes
});

export default router;
