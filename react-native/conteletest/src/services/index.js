import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8081',
});

export const PostPoints = async (endpoint, body) => {
  try {
    const {data} = await api.post(endpoint, body);
    return data;
  } catch (err) {
    console.log('erro no try catch ' + err);
  }
};

export default api;
