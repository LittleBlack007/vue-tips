import LoadingImg from '@/assets/loading.gif';

let imgs = []; // 收集需要懒加载的图片信息

const lazyDirective = {
  inserted(el,bind){
    const {value, arg} = binding;
    let container = el.parentNode;
    // 获取加载图片
    el.src = LoadingImg;
    // 找到容器
    while(container && container.className.indexOf(arg) === -1){
      container = container.parentNode;
    }
    const img = {
      el: el,
      src: value,
      container:{
        top: container && container.getBoundingClientRect().top || 0,
        clientHeight: container && container.clientHeight || 0
      },
      height: el.height || 0
    }
    // 添加到当前需要被懒加载的图片集合内，当滚动时，加载真实真实图片
    imgs.push(img);
    // 立即处理： 是否加载真实图片
    LoadingImg(img);
  },
  unbind(el){
    
  }
}