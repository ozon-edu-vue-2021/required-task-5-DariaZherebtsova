<template>
  <v-card class="basket">
    <v-card-title>Корзина</v-card-title>
    <v-data-table
      :headers="headers"
      :items="basketProducts"
      :hide-default-header="true"
      no-data-text="пусто"
      hide-default-footer
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:footer>
        <div class="basket-total">
          <div>Общая стоимость:</div>
          <div>{{ totalPrice }}</div>
        </div>
      </template>
    </v-data-table>
    <v-card-actions class="btn-wrapper">
      <v-btn
        :color="color.pink"
        text
        @click="makeOrder"
        :disabled="!basketProducts.length"
      >
        Оформить
      </v-btn>
      <v-btn :color="color.blue" text @click="goToCatalog">
        Вернуться в каталог
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { COLOR } from '@/shared/const';

export default {
  name: 'Catalog',

  data: () => ({
    headers: [
      { text: 'Название', value: 'title' },
      { text: 'Цена', value: 'price' },
      { text: 'Actions', value: 'actions', align: 'right' },
    ],
    color: COLOR,
  }),

  computed: {
    basketProducts() {
      return this.$store.state.basketProducts;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },

  methods: {
    goToCatalog() {
      this.$router.push({ name: 'catalog' });
    },
    deleteItem(item) {
      this.$store.commit('deleteFromBasket', item);
    },
    makeOrder() {
      alert(JSON.stringify(this.basketProducts));
    },
  },
};
</script>

<style scoped>
.basket {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 50px;
}
.basket-total {
  padding: 30px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  gap: 10px;
}
</style>
