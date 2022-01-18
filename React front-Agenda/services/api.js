const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:2222'
  });

module.exports = api;  
  