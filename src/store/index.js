import Vue from 'vue';
import Vuex from 'vuex';
import productsApi from '@/api/poducts-api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basketProducts: [
      { title: 'French Fries with Sausages', price: 100 },
      { title: 'Vjkjrj', price: 100 },
    ],
  },
  getters: {
    getTotalPrice: (state) => {
      let result = state.basketProducts.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      return result;
    },
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
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
      productsApi
        .getProducts()
        .then((response) => context.commit('setProducts', response));
    },
  },
});
