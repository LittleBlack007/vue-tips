import qs from 'qs';

/**
 * 根据环境变量进行接口区分
*/
let baseURL = '';
let baseURLArr = [
  {type: 'development',url: 'http://localhost:6047'},
  {type: 'test', url: 'http://loacalhost:6047'},
  {type: 'production', url: 'http://api.xxx.xxx.com'}
]
baseURL = baseURLArr.find(item => process.env.NODE_ENV === item.type);

/**
 * 封装fetch开始
*/
function request(url,option={}){
  url = baseURL;
  // GET请求的处理
  !options.method ? option.method = 'GET' : null;  // 不传method默认为get请求
  if(options.hasOwnProperty('params')){
    if(/^(GET|DELETE|HEAD|OPTIONS)/$/i.test(options.method)){
      // 往url拼接传参
      const ask = url.includes('?') ? '&' : '?';
      url += `${ask}${qs.stringify(params)}`;
    }
    delete options.params;
  }

  // 合并配置项
  options = Object.assign({
    // 允许跨域携带资源凭证 same-origin同源可以 omit都不携带 include 允许跨域携带凭证信息
    credentials: 'include',
    // 设置请求头
    hearders: {
      Accept: 'application/json'
    }
  }, options);

  // token校验
  const token = localStorage.getItem('token');
  token && (options.hearders.Authorization = token);

  // POST请求处理
  if(/^(POST|PUT)$/i.test(options.method)){
    !options.type ? options.type = 'urlencode' : null;
    if(options.type === 'urlencode'){
      options.hearders['Content-type'] = 'application/x-www-form-urlencode';;
      options.body = qs.stringify(options.body);
    }
    if(options.type === 'json'){
      options.hearders['Content-type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    }
  }

  return fetch(url,options).then(response => {
    // 返回的结果进行分析，简化后期调用接口判错处理、
    if(!/^(2|3)\d{2}$/.test(response.status)){
      switch(response.status){  // 这里可以设定一些固定的错误提示类，跑出去
        case 401: // 权限不足
          break;
        case 403: // 服务器已经处理请求，但是拒绝执行
          break;
        case 404: // 找不到对应的地址
          break;
      }
      return response.json();
    }
  }).catch(error => {
    // 断网处理
    if(!window.navigator.onLine){
      // 跳转到断网页面
      return;
    }
    return Promise.reject(error);
  })
};

export default request;