import Vue from 'vue';
import PLoading from '../components/p-loading.vue';

const loadingDiretive = {
  inserted(el,binding){  // el 为dom节点；  binding 为绑定的值
    console.log('PLoading',PLoading);
    const loadingCtor = Vue.extend(PLoading);  // 创建PLoading 构造器，方便后期生成真实dom结构
    const loadingComp = new loadingCtor(); // 创建虚拟节点
    const pLoadingDom = loadingComp.$mount(); // 获取dom节点
    console.log('loadingCtor',loadingCtor);
    console.log('loadingComp',loadingComp);
    console.log('pLoadingDom',pLoadingDom.$el);
    el.instance = loadingComp;
    if(binding.value){
      insertDom(el);
    }
  }
}

function insertDom(el){
  el.appendChild(el.instance.$el)
}

export default loadingDiretive;