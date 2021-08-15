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
    eventBus.$on('add-age', age => {
      this.ageData = age;
    })
  }
}
</script>