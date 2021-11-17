<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  created() {
    console.log('---getProducts');
    this.$store.dispatch('getProducts');
  },
};
</script>
