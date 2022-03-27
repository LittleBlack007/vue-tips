<!--
* @author pyp
* @date 2022-03-27 15:22:58
* @decription 固定高度的虚拟滚动列表
-->
<template>
  <div class="list-container">
    固定高度的虚拟滚动列表
    <InfiniteScrollFixedHeightList 
      :listData="listData"
      :itemSize="16"
    />
  </div>
</template>

<script>
import InfiniteScrollFixedHeightList from './infinite-scroll-fixed-height.vue';

export default {
  name: 'ShowInfiniteScrollFixedHeightList',
  components:{
    InfiniteScrollFixedHeightList
  },
  data(){
    return {
      listData:[],
    }
  },
  created(){
    for (let i = 0; i < 1000; i++) {
      this.listData.push({ id: i, value: 'item' + i });
    }
  }
}
</script>

<style lang="less">
  .list-container{
    margin: 0 auto;
    height: 100%;
  }
</style>