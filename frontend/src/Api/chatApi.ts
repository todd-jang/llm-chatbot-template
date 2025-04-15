import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const sendMessage = async (message: string) => {
  const res = await axios.post(`${BASE_URL}/api/chat`, { message });
  return res.data.response;
};