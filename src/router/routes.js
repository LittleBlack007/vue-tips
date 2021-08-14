import Home from '../pages/home.vue';
import Main from '../pages/Main.vue';

const routes = [
  {
    path: '/home1',
    name: 'Home',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/',
    name: 'Main',
    icon: 'mail',
    title: '主页',
    redirect:'/home', // 设置默认打开的页面
    component: Main,
    children:[
      {
        path: '/home',
        icon:'mail',
        name: 'Home',
        component: Home
      }
    ]
  }
]

export default routes;