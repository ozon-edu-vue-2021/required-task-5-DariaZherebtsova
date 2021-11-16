<template>
  <v-card class="product-card">
    <v-img :src="require(`@/assets/images/${this.imageName}.webp`)"></v-img>

    <v-card-title> {{ price }} </v-card-title>

    <v-card-subtitle> {{ title }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Купить </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
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
  }),

  mounted() {
    // console.log('---imageName', `@/assets/images/${this.imageName}.webp`);
  },

  computed: {},

  methods: {},
};
</script>

<style scoped>
.product-card {
  margin-bottom: 10px;
  max-width: 344px;
}
</style>
