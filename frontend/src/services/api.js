//API para o website
import axios from "axios";
import env from './../env';

const api = axios.create({
  baseURL: env.API.URL
});


export default api;
