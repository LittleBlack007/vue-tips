// https://juejin.cn/post/7094165971874611230  axios 封装
import axios from 'axios';
import serverConfig from './serverConfig';
import qs from 'qs';

// 创建axios请求实例
const serviceAxios = axios.create({
  baseURL: serverConfig.baseURL, // 基础请求地址
  timeout: 10 * 1000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需求携带cookie
})

// 创建请求拦截
serviceAxios.interceptors.request.use(
  config => {
    // 如果开启token认证
    if(serverConfig.useTokenAuthorization){
      config.headers['Authorization'] = localStorage.getItem("token");
    }
    // 设置请求头
    if(!config.headers['content-type']){   // 如果没有设置请求体的格式
      if(config.method === 'POST'){
        config.headers['content-type'] = "aplication/x-www-form-urlencoded";
        config.data = qs.stringify(config.data);  // 序列化，比如表单数据
      }else{
        config.headers['content-type'] = 'application/json';  // 默认类型
      }
    }
    // 返回config 不然不生效
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 创建相应拦截器
serviceAxios.interceptors.response.use(
  res => {
    let data = res.data;
    // 处理业务逻辑，比如或者token过期
    // ...
    return data;
  },
  error => {
    let message = '';
    if(error && error.response){
      switch(error.response.status){
        case 302:
          message = '接口重定向';
          break;
        case 400:
          message = '参数不正确';
          break;
        case 401:
          message = '您未登录，或者登陆超时，请先登陆！';
          break;
        case 403:
          message = '您没有权限操作！';
          break;
        case 404:
          message = '请求地址出错了' + error.response.config.url;
          break;
        case 408:
          message = '请求超时';
          break;
        case 409:
          message = '系统已存在相同的数据';
          break;
        case 500:
          messge = '服务器内部错误';
          break;
        case 502:
          message = '服务未实现';
          break;
        case 503:
          message = '服务不可用';
          break;
        case 504:
          message = '服务器暂时无法访问，请稍后重试';
          break;
        case 505:
          message = 'HTTP版本不支持';
          break;
        default: 
          message = '异常问题，请联系管理员'
      }
      return Promise.reject(message);
    }
  }
);
export default serviceAxios;