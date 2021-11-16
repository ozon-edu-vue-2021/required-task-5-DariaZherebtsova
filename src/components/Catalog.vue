<template>
  <div class="catalog">
    <ProductCard
      v-for="product of products"
      :key="product.id"
      :title="product.dish"
      :price="100"
      :imageName="getImageName()"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import productsApi from '@/api/poducts-api';
import selectImage from '@/utils/selectImage';

export default {
  name: 'Catalog',

  components: {
    ProductCard,
  },

  data: () => ({
    products: [],
  }),

  mounted() {
    console.log('---Catalog mounted');
    productsApi.getProducts().then((response) => (this.products = response));
  },

  methods: {
    getImageName() {
      return selectImage();
    },
  },
};
</script>

<style>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
