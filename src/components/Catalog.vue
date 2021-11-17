<template>
  <div class="catalog">
    <ProductCard
      v-for="product of products"
      :key="product.id"
      :title="product.dish"
      :price="getPrice()"
      :imageName="getImageName()"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import selectImage from '@/utils/selectImage';
import randomInteger from '@/utils/random';

export default {
  name: 'Catalog',

  components: {
    ProductCard,
  },

  created() {
    if (!this.products.length) {
      this.$store.dispatch('getProducts');
    }
  },

  computed: {
    products() {
      return this.$store.state.products;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
