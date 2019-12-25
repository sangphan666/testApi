import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://japana.backend:8080'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMDg4Mzc2MThjODY2N2ViNmRjMDdkZjAxZmNlNmY0NmU3YmNjNTI2NDE4OGE0MWVhZDE4ZGRiYTZhYWY5ZjllZDJiODU5ZmIyZDA4NmVhNDAiLCJpYXQiOjE1NzcxNjAzMjUsIm5iZiI6MTU3NzE2MDMyNSwiZXhwIjoxNTc3MTYzOTI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Seil1ayb3FjFzKs4XztV5wZp5SWZnLdveZ5IjlAjuPx9lM1pRm_ZFMhr3BKHlLEWNKTpIVohM1I_Cnn0Dr19bpFtK1VkvNZfjltBvw4nspcB7uamI7FWp1NpbRHkC3i0IJ_BDBeabfOwU3ce8kzUv-SZZK_dh5hTZRjuc4xoorCaww0qvwTOGqNxyxdvf1wX_ST24rJ1rPoMZbECmHP9mOgfhYtJ8EMBK6U46wZjVfHTXILJcQp49jqXSmy0hBOO1DL4GMPYSCZpICUj2Pj9MB0DAJhZx86FfGV2N8b6VMUECpsHQ4_Ao9RclkSGDrR_v8A37PWBitVJsgZaWOe8Iu3YA4cUW5uTU2P1VOY1v4UagvfgtB-SmyzZCvQSM2ZXTKbr92Je0W1a3Tf4X5uU9eYlt4sRmoWkRFSs2PDxqNb1gppQTMkYFCWDJii98yM-oldL8cQcCpId__u1NVmBZgDROKAQsA6B7SyCqnjRfTN9ZUee2w5HfFkbM55prHFMsji7MFWvfmWlZpZ1Cg8Orix1LVo7kE10wLiFp2F9-4PgDk7hr9G1yROBAg-cUw35jZG_tx-gYr61sriaSC0XgygQ7wmy8hMfXrtvottiP1Y-svc0virEp7nbrNIoltnMwHNgCPAnxz05QN56NPiQZC5FwgYoUScf_ZMO4j3C3dc'
axios.defaults.headers.get['Accept'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
