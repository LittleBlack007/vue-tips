<template>
  <div>
    <div><img src="../assets/logo.png"></div>
    <!-- <Circurt /> -->
  </div>
</template>

<script>
import EventBus from './vue-tips/event-bus/event-bus.vue';
// import Circurt from '@/components/antdv-g6-charts/circurt.vue'; 

export default {
  name: 'Home',
  components:{
    EventBus,
    // Circurt
  },
  data(){
    return {
      count: 100,
      a: this.count === 100 ? '是的' : '不是',
    }
  },
  methods:{

  }
}
</script>>