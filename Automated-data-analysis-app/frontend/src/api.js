
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/upload-file/', formData);
};

export const analyzeMySQL = (config) => {
  return api.post('/upload-mysql/', config);
};
