<template>
  <div>
    组件1
    <h1>{{ ageData }}</h1>
  </div>
</template>

<script>
import {eventBus} from '../../../main.js';

export default {
  name: 'Comp1', // 测试兄弟组件传值
  props:{
    age: Number
  },
  data(){
    return {
      ageData: this.age
    }
  },
  created(){
    console.log('子节点-demo-created')
    eventBus.$on('add-age', age => {
      this.ageData = age;
    })
  },
  mounted () {
    console.log('子节点-demo-mounted')
  },
  activated () {
     console.log('子节点-demo-activated')
  },
  deactivated () {
    console.log('子节点-demo-deactivated')
  },
  beforeDestroy () {
    console.log('子节点-demo-beforeDestroy')
  },
  destroyed () {
    console.log('子节点-demo-destroyed')
  }
}
</script>