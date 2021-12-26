<template>
  <div>
    <div class="content"><img src="../../../assets/logo.png"></div>
    <Comp1 :age="age" />
    <Comp2 :age="age" />
  </div>
</template>

<script>
import Comp1 from './comp1.vue';
import Comp2 from './comp2.vue';

export default {
  name: 'EventBus',
  components:{
    Comp1,Comp2
  },
  data(){
    return {
      age: 20,
    }
  },
  methods:{

  },
  created () {
    console.log('父节点-demo-created')
  },
  mounted () {
    console.log('父节点-demo-mounted')
  },
  activated () {
     console.log('父节点-demo-activated')
  },
  deactivated () {
    console.log('父节点-demo-deactivated')
  },
  beforeDestroy () {
    console.log('父节点-demo-beforeDestroy')
  },
  destroyed () {
    console.log('父节点-demo-destroyed')
  }
}
</script>
<style lang="less" scoped>
 .content {
   color: blueviolet;
 }
</style>

/*兄弟组件之间传值*/