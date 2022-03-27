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
      icon: 'home',
      name: 'Home',
      title: '主页',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/special-efficacy',
      icon: 'reddit',
      name: 'special-efficacy',
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
        },
        {
          path: '/vue-tips/lazy-loading',
          icon: 'dribbble',
          name: 'lazy-loading',
          title: '懒加载指令',
          component: () => import('../pages/vue-tips/img-lazy/img-lazy.vue')
        },
        {
          path: '/vue-tips/infinite-scroll-fixed-height',
          icon: 'dribbble',
          name: 'lazy-loading',
          title: '固高虚拟列表',
          component: () => import('../pages/vue-tips/infinite-scroll-fixed-height')
        }
      ]
    },
    {
      path: '/test',
      icon: 'rocket',
      name: 'test',
      title: '测试',
      component: () => import('@/pages/other/form.vue')
    }
  ]
}

const mainRoutes = generateRoutes(routes,ChildrenRouterView);

export default mainRoutes;