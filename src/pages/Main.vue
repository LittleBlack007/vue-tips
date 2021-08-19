<template>
  <div class="contain">
    <div class="header" id="header">
      <img src="@/assets/header-left.jpg" :style="{transform: 'rotate('+ angle*direction +'deg)', left: leftImg + 'px' }" />
      <span>Vue Tips For Green Men</span>
      <img src="@/assets/header-right.jpg" :style="{transform: 'rotate('+ -angle*direction +'deg)', left: rightImg + 'px'}" />
    </div>
    <div class="left-side-menu" :style="{width: leftSideWidth +'px'}">
      <PMenu :menuWidth="menuWidth" @toggleCollapsedWidth="toggleCollapsedWidth" :list='list' />
    </div>
    <!-- <div class="right-side-content1">
      <PinkSky />
    </div> -->
    <div class="right-side-content scroller" :style="{left: leftSideWidth+'px'}">
      <router-view/>
    </div>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import PMenu from '../menu/p-menu.vue';
import mainRouetes from '../router/main-routes.js';
import PinkSky from './special-efficacy/pink-sky.vue';

export default {
  name: 'Main',
  components:{
    PMenu,
    PinkSky
  },
  data(){
    return {
      tiemer: null,
      angle: 0,
      leftImg:0,
      rightImg:0,
      menuWidth: 210,
      leftSideWidth: 210,
      direction:1,
      list: mainRouetes.children,
      headerWidth:0
    }
  },
  methods:{
    toggleCollapsedWidth(leftSideWidth){
      this.leftSideWidth = leftSideWidth;
    }
  },
  mounted(){
    this.headerWidth = document.getElementById("header").offsetWidth;    //宽度
    window.onresize = () => {
      return (() => {
        this.headerWidth = document.getElementById("header").offsetWidth; 
      })();
    };
    let addNumber = 3;
    this.timer = setInterval(() => {
      this.angle >= 360 ? this.angle = 10 : this.angle += 10 ;
      this.leftImg += addNumber;
      this.rightImg += -addNumber;
      if((this.headerWidth/2)-174 >= 0){
        if(this.leftImg >= (this.headerWidth/2)-100 || this.leftImg <0){
          this.leftImg > 0 ? this.leftImg = (this.headerWidth/2)-100 : null; // 防止窗口宽度改变的时候  leftImg - (this.headerWidth/2)-174 > addNumber  那就回不去了，addNumber一直正负变化
          this.leftImg > 0 ? this.rightImg = -((this.headerWidth/2)-100) : null;
          this.direction = -this.direction;
          addNumber = -addNumber;
        }
      }else{
        this.leftImg = 0;
        this.rightImg = 0;
      }
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