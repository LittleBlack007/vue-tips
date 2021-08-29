// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import less from 'less';
import loadingDirective from './utils/loading.js';
import lazyDirective from './utils/lazy-loading/lazy-loading.js';
import {Spin} from 'ant-design-vue';
import VueLazyload from 'vue-lazyload';  // 懒加载插件
import LoadingGif from '@/assets/loading.gif';


export const eventBus = new Vue();  // 兄弟之间传值 on emit
Vue.config.productionTip = false

// 指令
Vue.directive('loading',loadingDirective);
Vue.directive('mylazy',lazyDirective);

// 插件，组件
Vue.use(less);
Vue.use(Spin);
Vue.use(VueLazyload,{
  preLoad: 1.3, // 提前加载1.3倍高度的图片
  error: '../static/imgs/nopic.jpg', // 加载失败时的图片(此处引入图片的时候，引入src文件夹下面的assets，使用相对路径失效，解决：可以写src文件夹外面的图片的路径，也可以直接使用相对路径import引入图片，赋值)；
  loading: LoadingGif, // 加载中的图片
  attempt: 2, // 加载失败尝试数
  listenEvents: ['scroll'],  // 监听事件
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
