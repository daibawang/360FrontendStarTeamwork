import Vue from 'vue'
const axios = require('axios')
axios.default.defaults.timeout = 3600;
Vue.prototype.axios = axios;

