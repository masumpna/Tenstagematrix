import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Example APIs
export const depositFunds = (amount) => API.post('/deposit', { amount });
export const withdrawFunds = (amount, address) => API.post('/withdraw', { amount, address });
export const transferFunds = (toUserId, amount) => API.post('/transfer', { toUserId, amount });
export const getUserInfo = () => API.get('/user');

export default API;
