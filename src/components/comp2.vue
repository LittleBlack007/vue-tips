<template>
  <div>
    组件2
    <h1>{{ ageData }}</h1>
    <button @click="addAge">增加 age</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
  name: 'Comp2', // 测试兄弟组件传值 event bus
  props:{
    age: Number
  },
  data(){
    return {
      ageData: this.age
    }
    
  },
  methods:{
    addAge(){
      this.ageData += 1;
      eventBus.$emit('add-age',this.ageData);
    }
  }
}
</script>>