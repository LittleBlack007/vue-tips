import Main from '../pages/Main.vue';
import Home from '../pages/Home.vue';
import EventBus from '../pages/vue-tips/event-bus/event-bus.vue';
import ChildrenRouterView from './children-router-view.vue';
import { generateRoutes } from '../utils';

const routes = {
  path: '/',
  name: 'Main',
  icon: 'mail',
  title: '主页',
  redirect: '/home', // 设置默认打开的页面
  component: Main,
  children: [
    {
      path: '/home',
      icon: 'reddit',
      name: 'Home',
      title: '特效',
      component: Home
    },
    {
      path: '/vue-tips',
      icon: 'rocket',
      name: 'vue-tips',
      title: 'Vue技巧',
      children:[
        {
          path: '/vue-tips/event-bus',
          icon: 'team',
          name: 'event-bus',
          title: '兄弟传值',
          component: EventBus
        },
        {
          path: '/vue-tips/vuex',
          icon: 'dribbble',
          name: 'vuex',
          title: 'VueX',
          component: () => import('../pages/vue-tips/vuex-demo.vue')
        }
      ]
    }
  ]
}

const mainRoutes = generateRoutes(routes,ChildrenRouterView);

export default mainRoutes;