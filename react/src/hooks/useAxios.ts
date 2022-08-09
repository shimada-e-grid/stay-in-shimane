import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const instance = axios.create(
  {
    baseURL: process.env.REACT_APP_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    validateStatus: status => status < 500
  }
);

export const useAxios = makeUseAxios({
  axios: instance
});

export default useAxios;
