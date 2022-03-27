<!--
* @author pyp
* @date 2022-03-27 15:22:58
* @decription 固定高度的虚拟滚动列表
-->
<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div 
        ref="items"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px'}"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfiniteScrollFixedHeightList',
  props:{
    listData:{// 百万数据
      type: Array,
      default: () => []
    },
    itemSize:{ // 列表每项的高度
      type: Number,
      default: 200,
    },
  },
  computed:{
    listHeight(){  // 列表总高度
      return this.listData.length * this.itemSize;
    },
    visibleCount(){  // 窗口可显示的列表项数量
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    getTransform(){  // 列表向下移动的动画效果
      return `translate3d(0,${this.startOffset}px,0)`
    },
    visibleData(){  // 窗口显示的数据
      return this.listData.slice(this.start, Math.min(this.end,this.listData.length))
    }
  },
  data(){
    return {
      // 可视区域高度
      screenHeight: 0,
      // 偏移量
      startOffset: 0,
      // 其实索引
      start: 0,
      // 结束索引
      end: null
    }
  },
  methods:{
    scrollEvent(){
      // 当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      // 开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      // 结束索引
      this.end = this.start + this.visibleCount;
      // 偏移量
      this.startOffset = scrollTop - ( scrollTop % this.itemSize )
    }
  },
  mounted(){
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
  }
}
</script>

<style lang="less" scoped>
  .infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>

</style>