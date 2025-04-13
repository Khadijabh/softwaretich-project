

import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

export const login = async (data) => {
  return axios.post(`${API_URL}signin`, data);
};

export const register = async (data) => {
  return axios.post(`${API_URL}signin`, data);
};
