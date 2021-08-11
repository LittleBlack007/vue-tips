<template>
  <div>
    <div><img src="../assets/logo.png"></div>
    <EventBus />
  </div>
</template>

<script>
import EventBus from './event-bus.vue';

export default {
  name: 'Home',
  components:{
    EventBus
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>>