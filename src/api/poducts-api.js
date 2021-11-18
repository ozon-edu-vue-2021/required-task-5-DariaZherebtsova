import Vue from 'vue';
import { products } from '@/api/index';

const productsApi = {
  async getProducts() {
    try {
      const res = await products.get('/random_food?size=30');
      return res.data;
    } catch (err) {
      Vue.notify({
        group: 'catalog',
        type: 'error',
        text: 'Проблемы с загрузкой товаров',
      });
    }
  },
};

export default productsApi;
