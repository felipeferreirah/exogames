import axios from "axios";
import env from './../../env';
import {
  getToken,
  setNewToken
} from "./auth";

//API para o Admin (auth)
const api = axios.create({
  baseURL: env.API.URL
});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true
}

const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    const token = getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  }
  return request
}

api.interceptors.request.use(
  request => requestHandler(request)
)
const refreshToken = async () => {
  return await api.post('/auth/refresh', {
      token: getToken()
    })
    .then(newToken => {
      setNewToken(newToken.data.token.accessToken);
      return newToken.data.token.accessToken
    });
};

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    if(error.response.stats === 401){
      refreshToken().then((token) => {
        error.config.headers.Authorization = `Bearer ${token}`;
        api.request(error.config).then(() => window.location.replace('/admin'));
      });
    }
  }
  return Promise.reject({
    ...error
  })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Tratar qualquer coisa aqui no successHandler
  }
  return response
}


api.interceptors.response.use(

  response => successHandler(response),
  error => errorHandler(error)
)



export default api;
