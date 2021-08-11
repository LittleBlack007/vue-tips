<template>
  <div>
    <div><img src="../assets/logo.png"></div>
    <EventBus />
    <a-button type="primary">ant button</a-button>
  </div>
</template>

<script>
import EventBus from './event-bus.vue';
import {Button} from 'ant-design-vue';

export default {
  name: 'Home',
  components:{
    EventBus,
    AButton: Button
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>>