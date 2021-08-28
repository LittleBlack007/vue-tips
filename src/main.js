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


export const eventBus = new Vue();  // 兄弟之间传值 on emit
Vue.config.productionTip = false
Vue.directive('loading',loadingDirective);
Vue.directive('lazy',lazyDirective);
Vue.use(less);
Vue.use(Spin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
