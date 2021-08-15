import Main from '../pages/Main.vue';
import Home from '../pages/Home.vue';
import EventBus from '../pages/event-bus.vue';
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
      icon: 'mail',
      name: 'Home',
      title: '特效',
      component: Home
    },
    {
      path: '/vue-tips',
      icon: 'mail',
      name: 'vue-tips',
      title: 'Vue技巧',
      children:[
        {
          path: '/vue-tips/event-bus',
          icon: 'mail',
          name: 'event-bus',
          title: '兄弟传值',
          component: EventBus
        }
      ]
    }
  ]
}

const mainRoutes = generateRoutes(routes,ChildrenRouterView);

export default mainRoutes;