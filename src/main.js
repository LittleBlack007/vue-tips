// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import less from 'less';
import loadingDirective from './utils/loading.js';


export const eventBus = new Vue();  // 兄弟之间传值 on emit

Vue.config.productionTip = false
Vue.directive('loading',loadingDirective);
Vue.use(less);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
