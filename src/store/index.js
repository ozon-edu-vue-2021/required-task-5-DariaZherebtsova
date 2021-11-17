import Vue from 'vue';
import Vuex from 'vuex';
import productsApi from '@/api/poducts-api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basketProducts: [],
    isProductsLoading: false,
  },
  getters: {
    getTotalPrice: (state) => {
      return state.basketProducts.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProductsLoading: (state, value) => {
      state.isProductsLoading = value;
    },
    addToBasket: (state, product) => {
      state.basketProducts = [...state.basketProducts, product];
    },
    deleteFromBasket: (state, product) => {
      state.basketProducts = state.basketProducts.filter((item) => {
        if (
          item.title === product.title &&
          item.price === Number(product.price)
        ) {
          return false;
        } else {
          return true;
        }
      });
    },
  },
  actions: {
    getProducts: (context) => {
      context.commit('setProductsLoading', true);
      productsApi.getProducts().then((response) => {
        context.commit('setProducts', response);
        context.commit('setProductsLoading', false);
      });
    },
  },
});
