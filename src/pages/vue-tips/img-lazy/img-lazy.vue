<template>
  <div class="container" ref="container">
     <ul>
        <li v-for="(image, idx) in images" :key="image.id">
          <img v-lazy:[container]="image.cover"  alt=""  :data-id="idx"/>
  		  </li>
  	 </ul>
  </div>
</template>

<script>
import data from './mock.js';
import {EventBus} from '@/main.js';

export default {
  name: "ImgLazy",
  data(){
    return {
      images: [],
      container: 'container' //图片容器的className
    }
  },
  created(){
    setTimeout(()=>{
      this.images = data;
    },1000)
  },
  mounted(){
    this.$refs.container.addEventListener("scroll", () => {
      EventBus.$emit("iscroll", this.$refs.container);
    })
  }
}
</script>

<style>

</style>