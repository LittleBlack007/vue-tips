import Vue from 'vue';
import PLoading from '../components/p-loading.vue';

const loadingDiretive = {
  inserted(el,binding){  // el 为dom节点；  binding 为绑定的值
    console.log('PLoading',PLoading);
    const loadingCtor = Vue.extend(PLoading);  // 创建PLoading 构造器，方便后期生成真实dom结构
    const loadingComp = new loadingCtor(); // 创建虚拟节点
    const pLoadingDom = loadingComp.$mount();
    console.log('loadingCtor',loadingCtor);
    console.log('loadingComp',loadingComp);
    console.log('pLoadingDom',pLoadingDom);

  }
}

export default loadingDiretive;