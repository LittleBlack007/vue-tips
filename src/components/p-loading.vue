<template>
  <div class="container-spin">
    <Spin tip="加载中..." />
  </div>
</template>

<script>
import {Spin} from 'ant-design-vue';
export default {
  name: 'PLoading',
  components:{
    Spin
  }
}
</script>

<style lang="less" scoped>
  .container-spin{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .ant-spin-spinning{
   width: 100%;
   height: 100%; 
   display: flex;
   align-items: center;
   justify-content: center;
  }
</style>