export const generateRoutes = (routes,routerView) => {  // 为有children的嵌套路由添加router-view  因为二级三级路由下的页面显示在main.vue 那一层
  if(!routes.component && routes.children){
    routes.component = routerView;
  }
  if(routes.children && routes.children.length > 0){
    routes.children.forEach(item => {
      generateRoutes(item,routerView);
    })
  }
  return routes;
}

export function debounce(func, delay){
  let timer = null;
  return function(...arg){
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      func.apply(this,arg);
    }, delay);
  }
}