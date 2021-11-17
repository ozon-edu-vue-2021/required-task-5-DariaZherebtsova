<template>
  <div>
    <div v-if="isProductsLoading" class="catalog-loading">
      <v-progress-circular
        indeterminate
        :color="color.pink"
        :size="70"
        :width="7"
      ></v-progress-circular>
    </div>
    <div class="catalog" v-else>
      <ProductCard
        v-for="product of products"
        :key="product.id"
        :title="product.dish"
        :price="getPrice()"
        :imageName="getImageName()"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import selectImage from '@/utils/selectImage';
import randomInteger from '@/utils/random';
import { COLOR } from '@/shared/const';

export default {
  name: 'Catalog',

  components: {
    ProductCard,
  },

  data: () => ({
    color: COLOR,
  }),

  created() {
    if (!this.isProductsLoading && !this.products.length) {
      this.$store.dispatch('getProducts');
    }
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    isProductsLoading() {
      return this.$store.state.isProductsLoading;
    },
  },

  methods: {
    getImageName() {
      return selectImage();
    },
    getPrice() {
      return randomInteger(100, 400);
    },
  },
};
</script>

<style scoped>
.catalog {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
}
.catalog-loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
