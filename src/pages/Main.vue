<template>
  <div class="contain">
    <div class="header">
      <img src="@/assets/header-left.jpg" :style="{transform: 'rotate('+ angle +'deg)'}" />
      <span>Vue Tips For Green Men</span>
      <img src="@/assets/header-right.jpg" :style="{transform: 'rotate('+ -angle +'deg)'}" />
    </div>
    <div class="left-side-menu" :style="{width: leftSideWidth +'px'}">
      <PMenu :menuWidth="menuWidth" @toggleCollapsedWidth="toggleCollapsedWidth" />
    </div>
    <div class="right-side-content" :style="{left: leftSideWidth+'px'}">
    </div>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import PMenu from '../menu/p-menu.vue';

export default {
  name: 'Main',
  components:{
    PMenu
  },
  props:{
  },
  data(){
    return {
      angle: 0,
      menuWidth: 210,
      leftSideWidth: this.menuWidth
    }
  },
  methods:{
    toggleCollapsedWidth(leftSideWidth){
      this.leftSideWidth = leftSideWidth;
    }
  },
  beforeMount(){
    let timer = setInterval(() => {
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