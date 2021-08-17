<template>
  <div>
    <div><img src="../assets/logo.png"></div>
    <EventBus />
  </div>
</template>

<script>
import EventBus from './vue-tips/event-bus/event-bus.vue';
export default {
  name: 'Home',
  components:{
    EventBus
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