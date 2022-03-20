import axios from 'axios'
// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=af61e9909f00d06d7606

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7'
});

export default api;