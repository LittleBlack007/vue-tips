<template>
  <div v-loading="loading">
    <Row :gutter="6">
      <Col v-for="item in list" :key="item">
        <Card hoverable style="width: 240px">
          <img
            slot="cover"
            src="../assets/header-left.jpg"
          />
          <CardMeta title="PPP">
            <template slot="description">
              ppppppp
            </template>
          </CardMeta>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Spin,Card} from 'ant-design-vue';

const CardMeta = Card.Meta
export default {
  name: 'PLoading',
  components:{
    Spin,Card,CardMeta
  },
  props:{
    data:{
      type: Array,
      default: () => []
    }
  },
  computed:{
    loading(){
      return !this.data.length;
    }
  },
  data(){
    return{
      list: [],
    }
  },

}
</script>