<template>
  <div class="contain">
    <div class="header">
      <img style="height:45px" src="@/assets/header-left.jpg" />
      <span>前端学习路程</span>
      <img style="height:45px" src="@/assets/header-right.jpg" />
    </div>
    <div class="left-side-menu">123</div>
    <div class="right-side-content">
      <PMenu />
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
}
</script>

<style lang="less">
  @import "./main.less";
</style>