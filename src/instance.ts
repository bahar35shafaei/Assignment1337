import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: process.env.REACT_APP_API_KEY!!,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

instance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config, headers: { ...config.headers } };
    return newConfig;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return { status: -1, message: 'Request canceled' };
    }
    if (error.response !== undefined) {
      return { ...error.response, response: error.response };
    }
    return {
      status: error.request.status,
      code: error.code,
      message: error.message,
    };
  },
);
