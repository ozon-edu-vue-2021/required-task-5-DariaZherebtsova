<template>
  <v-app>
    <v-main>
      <Catalog />
    </v-main>
  </v-app>
</template>

<script>
import Catalog from '@/components/Catalog.vue';

export default {
  name: 'App',

  components: {
    Catalog,
  },

  data: () => ({
    //
  }),
};
</script>
