import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from "vue-axios"
import router from './router'
import env from './env'



/**
 * 根据前端跨域方式进行调整
 * 接口代理方式：前端和后端在同一台主机下，使用相同的域名
 * 
 * 实际接口路径是 /a/b   转发时会将api给去掉  /api/a/b -> /a/b
 */
// axios.defaults.baseURL = '/api';
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

/**
 * 请求超时时间
 */
axios.defaults.timeout = 8000;

/**
 * axios相应信息统一拦截
 */
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
