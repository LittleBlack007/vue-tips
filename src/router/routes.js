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
  },
  {
    path: '/home1',
    name: 'Home1',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home1111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11111111112342111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11111111133311111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11111111222222222221111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home1111111111111111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home11111111111111111111111111111',
    icon: 'mail',
    title: '主页111111111111111111111111111111111111111111',
    component: Home
  },{
    path: '/home1',
    name: 'Home1111111111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },{
    path: '/home1',
    name: 'Home111111111111111111111111111111111111111111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home1111111111111111111111111111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111111111111111111351134111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111111111111111111114214235111111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111111111111111111112312423511111111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111111111111111111111113213132121111111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111111111111111111111111111234111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home11111124312312312111111111111111111111111234111111',
    icon: 'mail',
    title: '主页',
    component: Home
  },
]

export default routes;