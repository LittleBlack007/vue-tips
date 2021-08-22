import Main from '../pages/Main.vue';
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
      name: 'Home',
      title: '主页',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/function-menu',
      icon: 'reddit',
      name: 'Home',
      title: '特效',
      children:[
        {
          path: '/special-efficacy/cycle-fireworks',
          icon: 'dribbble',
          name: 'cycle-fireworks',
          title: '盛开烟花',
          component: () => import('../pages/special-efficacy/cycle-fireworks.vue')
        },
        {
          path: '/special-efficacy/pink-sky',
          icon: 'dribbble',
          name: 'pink-sky',
          title: '动态星空',
          component: () => import('../pages/special-efficacy/pink-sky.vue')
        }
      ]
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
        },
        {
          path: '/vue-tips/loading',
          icon: 'dribbble',
          name: 'loading',
          title: 'Loading指令',
          component: () => import('../pages/vue-tips/test-loading.vue')
        }
      ]
    }
  ]
}

const mainRoutes = generateRoutes(routes,ChildrenRouterView);

export default mainRoutes;