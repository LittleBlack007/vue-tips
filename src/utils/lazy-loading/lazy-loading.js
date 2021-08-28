import LoadingImg from '@/assets/loading.gif';
import {debounce} from '../index.js';
import lazyEventBus from './lazy-event-bus.js';

let imgs = []; // 收集需要懒加载的图片信息
const lazyDirective = {
  inserted(el,binding){
    const {value, arg} = binding;
    let container = el.parentNode;
    // 获取加载图片
    el.src = LoadingImg;  // 加载图片的地址
    // 找到容器
    while(container && container.className.indexOf(arg) === -1){
      container = container.parentNode;
    }
    const img = {
      el: el,
      src: value, //真实地址
      container:{
        top: container && container.getBoundingClientRect().top || 0,  // getBoundingClientRect方法返回元素的大小及其相对于视口的位置。
        clientHeight: container && container.clientHeight || 0
      },
      height: el.height || 0
    }
    // 添加到当前需要被懒加载的图片集合内，当滚动时，加载真实真实图片
    imgs.push(img);
    // 立即处理： 是否加载真实图片
    loadImg(img);
  },
  unbind(el){
    // 当前图片的指令接触绑定时，需要从imgs中删除（因为此时当前图片已经销毁）
    deleteImg(el);
  }
}

// 查看所有待加载的图片
function loadImages(){
  for(const img of imgs){
    loadImg(img);
  }
}

// 加载图片
function loadImg(img){
  const {el, src, height, container} = img;
  img.top = el.getBoundingClientRect().top || 0;
  console.log(img.top)
  const disTop = img.top - container.top;
  // 不在可视区
  if(disTop < -height || disTop > container.clientHeight){
    return;
  }
  // 在可视区
  const image = new Image();
  image.onload = () => {
    el.src = src;  // 真实地址
  }
  image.src = src;  // 真实地址
  console.log('加载了', el.dataset.id);
  deleteImg(el);  // 加载了的图片，需要将其从待加载的imgs中清除
}

function deleteImg(el){
  imgs = imgs.filter(img => img.el != el);
}


lazyEventBus.$on("iscroll", debounce(loadImages,300))
//滚动监听
//eventBus.$on("iscroll", debounce(loadImages,300))

export default lazyDirective;