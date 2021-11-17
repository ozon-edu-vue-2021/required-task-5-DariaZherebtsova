<template>
  <div class="counter">
    <v-btn icon @click="increaseNumber">
      <v-icon :color="color.blue"> mdi-plus </v-icon>
    </v-btn>
    <div>{{ value }}</div>
    <!-- <v-text-field :value="number" readonly></v-text-field> -->
    <v-btn icon @click="decreaseNumber">
      <v-icon :color="color.pink"> mdi-minus </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { COLOR } from '@/shared/const';

export default {
  name: 'Counter',

  props: {
    value: {
      type: Number,
      default: 1,
    },
  },

  data: () => ({
    color: COLOR,
    number: 1,
  }),

  watch: {
    value: {
      handler(newValue) {
        this.number = newValue;
      },
      immediate: true,
    },
  },

  methods: {
    increaseNumber() {
      this.number += 1;
      this.$emit('input', this.number);
    },
    decreaseNumber() {
      if (this.number > 0) {
        this.number -= 1;
        this.$emit('input', this.number);
      }
    },
  },
};
</script>

<style scoped>
.counter {
  width: 100px;
  display: flex;
  align-items: center;
}
</style>
