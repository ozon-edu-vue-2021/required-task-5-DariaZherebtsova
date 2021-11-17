import Vue from 'vue';
import Vuex from 'vuex';
import productsApi from '@/api/poducts-api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
  },
  actions: {
    getProducts: (context) => {
      productsApi
        .getProducts()
        .then((response) => context.commit('setProducts', response));
    },
  },
});
