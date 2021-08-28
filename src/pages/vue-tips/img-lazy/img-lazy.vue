<template>
  <div class="container" ref="container" v-loading="loading" @scroll="scrollEvent">
     <ul>
        <li v-for="(image, idx) in images" :key="image.id">
          <img v-lazy:[container]="image.cover"  alt=""  :data-id="idx" :height="160" />
  		  </li>
  	 </ul>
  </div>
</template>

<script>
import data from './mock.js';
import lazyEventBus from '@/utils/lazy-loading/lazy-event-bus.js';

export default {
  name: "ImgLazy",
  data(){
    return {
      images: [],
      container: 'container' //图片容器的className
    }
  },
  computed:{
    loading(){
      return !this.images.length
    }
  },
  methods:{
    scrollEvent(e){
      lazyEventBus.$emit("iscroll", this.$refs.container);
    }
  },
  created(){
    setTimeout(()=>{
      this.images = data;
    },2000)
  },
}
</script>

<style lang="less" scoped>
  .container{
    width: 100%;
    height: 100%;
    overflow: scroll;
    li{
      list-style-type: none;
    }
  }
</style>