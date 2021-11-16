import axios from 'axios';

const productsApi = {
  async getProducts() {
    console.log('---getProducts');
    try {
      const res = await axios.get(
        'https://random-data-api.com/api/food/random_food?size=30'
      );
      console.log('--getProducts res', res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default productsApi;
