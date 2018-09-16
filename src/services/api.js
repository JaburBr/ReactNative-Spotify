import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://192.168.2.4:3000',
});

export default Api;
