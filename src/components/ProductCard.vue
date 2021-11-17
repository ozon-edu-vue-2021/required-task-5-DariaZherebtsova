<template>
  <v-card class="product-card">
    <v-img :src="require(`@/assets/images/${this.imageName}.webp`)"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ price }} ₽</v-card-subtitle>
    <Counter v-model="number" />
    <v-card-actions class="btn-wrapper">
      <v-btn :color="color.pink" text @click="addToBasket"> Купить </v-btn>
      <v-btn :color="color.blue" text @click="goToBasket">
        Перейти в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Counter from '@/components/Counter.vue';
import { COLOR } from '@/shared/const';

export default {
  name: 'ProductCard',

  components: {
    Counter,
  },

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
      default: 'mock',
    },
  },

  data: () => ({
    number: 1,
    color: COLOR,
  }),

  methods: {
    goToBasket() {
      this.$router.push('basket');
    },
    addToBasket() {
      this.$store.commit('addToBasket', {
        title: this.title,
        price: this.price,
        number: this.number,
      });
    },
  },
};
</script>

<style scoped>
.product-card {
  margin-bottom: 10px;
  max-width: 344px;
}
.product-counter {
  width: 100px;
  display: flex;
  align-items: center;
}
.btn-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
