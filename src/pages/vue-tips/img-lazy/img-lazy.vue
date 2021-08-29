<template>
  <Row class="container" @scroll.native="scrollEvent">
    <Col :span="12" v-loading="loading" style="height: 100%">
      <ul>
          <li v-for="(image, idx) in images" :key="image.id">
            <img v-mylazy:[container]="image.cover"  alt=""  :data-id="idx" :height="160" />
          </li>
      </ul>
    </Col>
    <Col :span="12">
      <ul>
          <li v-for="image in images" :key="image.id">
            <img v-lazy="image.cover"  alt="" />
          </li>
      </ul>
    </Col>
  </Row>
</template>

<script>
import data from './mock.js';
import lazyEventBus from '@/utils/lazy-loading/lazy-event-bus.js';
import {Row,Col} from 'ant-design-vue';

export default {
  name: "ImgLazy",
  data(){
    return {
      images: [],
      container: 'container' //图片容器的className
    }
  },
  components:{
    Row,Col
  },
  computed:{
    loading(){
      return !this.images.length
    }
  },
  methods:{
    scrollEvent(e){
      console.log('我滚了')
      lazyEventBus.$emit("iscroll");
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

遇到的问题主要是：
1,img标签要给定高度
2，最外层要给定高度