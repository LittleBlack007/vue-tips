import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue';
import Main from '../pages/Main.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
