<template>
  <div class="contain">
    <div class="header">
      <img src="@/assets/header-left.jpg" :style="{transform: 'rotate('+ angle +'deg)'}" />
      <span>Vue Tips For Green Men</span>
      <img src="@/assets/header-right.jpg" :style="{transform: 'rotate('+ -angle +'deg)'}" />
    </div>
    <div class="left-side-menu" :style="{width: leftSideWidth +'px'}">
      <PMenu :menuWidth="menuWidth" @toggleCollapsedWidth="toggleCollapsedWidth" :list='list' />
    </div>
    <!-- <div class="right-side-content1" :style="{left: leftSideWidth+'px'}">
      <PinkSky />
    </div> -->
    <div class="right-side-content" :style="{left: leftSideWidth+'px'}">
      <router-view/>
    </div>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import PMenu from '../menu/p-menu.vue';
import mainRouetes from '../router/main-routes.js';
//import PinkSky from './special-efficacy/pink-sky.vue';

export default {
  name: 'Main',
  components:{
    PMenu,
    // PinkSky
  },
  data(){
    return {
      tiemer: null,
      angle: 0,
      menuWidth: 210,
      leftSideWidth: 210,
      list: mainRouetes.children
    }
  },
  methods:{
    toggleCollapsedWidth(leftSideWidth){
      this.leftSideWidth = leftSideWidth;
    }
  },
  beforeMount(){
    this.timer = setInterval(() => {
      this.angle >= 360 ? this.angle = 10 : this.angle += 10 ;
    }, 50)
  },
  destroyed(){
    clearInterval(timer);
  }
}
</script>

<style lang="less">
  @import "./main.less";
</style>