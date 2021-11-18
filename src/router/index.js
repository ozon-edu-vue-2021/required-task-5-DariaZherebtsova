import Vue from 'vue';
import Router from 'vue-router';

import Catalog from '@/components/Catalog.vue';
import Basket from '@/components/Basket.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'catalog',
      path: '/',
      component: Catalog,
    },
    {
      name: 'basket',
      path: '/basket',
      component: Basket,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
