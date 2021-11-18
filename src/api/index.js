import axios from 'axios';

export const products = axios.create({
  baseURL: 'https://random-data-api.com/api/food',
});
