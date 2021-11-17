<template>
  <v-card class="product-card">
    <v-img :src="require(`@/assets/images/${this.imageName}.webp`)"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ price }} ₽</v-card-subtitle>

    <v-card-actions class="btn-wrapper">
      <v-btn :color="color.pink" text> Купить </v-btn>
      <v-btn :color="color.blue" text @click="goToBasket">
        Перейти в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { COLOR } from '@/shared/const';

export default {
  name: 'Catalog',

  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      require: true,
    },
    imageName: {
      type: String,
      default: '6148226736',
    },
  },

  data: () => ({
    products: [],
    color: COLOR,
  }),

  mounted() {
    // console.log('---imageName', `@/assets/images/${this.imageName}.webp`);
  },

  computed: {},

  methods: {
    goToBasket() {
      this.$router.push('basket');
    },
  },
};
</script>

<style scoped>
.product-card {
  margin-bottom: 10px;
  max-width: 344px;
}
.btn-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
