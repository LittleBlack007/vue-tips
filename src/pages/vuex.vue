<template>
  <div>
    <h1>播放状态：{{ $store.state.isPlay }}</h1>
    <Button @click="onClick">点击播放</Button>
  </div>
</template>

<script>
import {Button} from 'ant-design-vue';

export default {
  name: 'VueX',
  components:{
    Button,
  },
  methods:{
    onClick(){
      this.$store.commit('markVideoPlayed');
    }
  },
  mounted(){
    this.$store.dispach('loadVideoStatus')
  }

}
</script>