<template>
  <div>
    组件2
    <h1>{{ ageData }}</h1>
    <Button type="primary" @click="addAge">增加 age</Button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import {Button} from 'ant-design-vue';

export default {
  name: 'Comp2', // 测试兄弟组件传值 event bus
  components:{
    Button
  },
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