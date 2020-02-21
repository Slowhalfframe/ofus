import axios from 'axios'
import {state} from "../store";

const server = axios.create({
  baseURL: 'http://192.168.0.104:9005/api/',
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

server.interceptors.request.use(config => {
  config.headers["authorization"] =state.token; //把token添加到请求头每次请求接口时候带上
  return config;
});


// http response 拦截器
// 验证每个请求响应头是否为401（用户认证失败） 失败即清除本地token并跳转到登陆页面
server.interceptors.response.use(
  response => {
    if(response.data.code == 401){
      $store.commit('removeToken');
      $router.push("/login")
    }
    return response
  },
);


export default server
