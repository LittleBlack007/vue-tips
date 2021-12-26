/**
 * 封装axios
 */

import qs from 'qs';
import axios from 'axios';

/**
 * 根据环境变量区分接口的默认地址
 * 因为在不同环境使用的地址是不一样的
 * 问题思考：这里跟vue.config.js里面的proxy的使用有什么区别和联系。
 */
let baseURL = '';
switch(process.env.NODE_ENV){
  case "production":
    baseURL = 'http://api.xxx.xxx.com';  // 正式环境的地址
    break;
  case "test": 
    baseURL = 'http://xxx.xxx.com:8080';
    break;
  default:
    baseURL = 'http://127.0.0.1:6047';
}
axios.defaults.baseURL = baseURL;

/**
 * 设置超时时间和跨域是否携带凭证
*/
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/**
 * 设置POST请求头，告知服务器请求主体的数据格式
 * post 主体的数据格式与后端商定，一般为 x-www-form-urlencoded
 * x-www-form-urlencoded  格式需要把json 转化为 key=value&key=value格式
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencode';
axios.defaults.transformRequest = data => qs.stringify(data);

/**
 * 设置请求拦截器
*/
axios.interceptors.request.use(config => {
  // 添加token验证，一般从本地存储中取值，也可以从VUEX中取值
  // 后端JWT实现token校验
  const token = localStorage.getItem("token");
  token && (config.headers.Authorization = token);
  return config;
}, error =>{
  return Promise.reject(error);
});

/**
 * 设置相应拦截器
 */
// axios.default.validateStatus = status => {
//   // 自定义响应成功的HTTP状态码
//   // 一般与后端商定好成功的状态码
//   return /^(2|3)\d{2}$/.test(status);
// }
axios.interceptors.response.use(response => {
  return response.data;  // response包含data,statuText 等一系列数据
},error => {
  let { response } = error;
  if(response){ // 服务器出错但是有返回数据
    switch(response.status){
      case 401:  // 一般为权限不足
        break;
      case 403: // 服务器拒绝执行
        break;
      case 404: // 找不到页面
        break;

    }
    

  }else{  // 服务器出错并且什么都没有返回
    if(!window.navigator.onLine){  // 断网 -- 跳转到断网页面
      return;
    }
    return Promise.reject(error);
  }
});

export default axios;