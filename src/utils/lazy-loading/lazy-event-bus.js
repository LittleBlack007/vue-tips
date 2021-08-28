import Vue from 'vue';

const lazyEventBus = new Vue();
Vue.prototype.$lazyEventBus = lazyEventBus;

export default lazyEventBus;