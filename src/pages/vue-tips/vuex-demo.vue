<template>
  <div>
    <h1>播放状态：{{ $store.state.isPlayed }}</h1>
    <Button @click="onClick">点击播放</Button>
  </div>
</template>

<script>
import {Button} from 'ant-design-vue';

export default {
  name: 'VueXDemo',
  components:{
    Button,
  },
  methods:{
    onClick(){
      this.$store.commit('markVideoPlayed',false);
    }
  },
  mounted(){
    this.$store.dispatch('loadVideoStatus');
  }

}
</script>