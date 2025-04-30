import api from './api';

export const signIn = async (credentials) => {
  const response = await api.post('/auth/SignIn', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const signUp = async (userData) => {
  const response = await api.post('/auth/SignUp', userData);
  return response.data;
};

export const signOut = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};