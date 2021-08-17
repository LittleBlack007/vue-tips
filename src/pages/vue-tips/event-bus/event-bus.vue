<template>
  <div>
    <div><img src="../../../assets/logo.png"></div>
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

  }
}
</script>

/*兄弟组件之间传值*/