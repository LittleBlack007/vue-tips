<template>
  <div v-loading="loading" class="test-loading">
    <Row :gutter="3">
      <Col v-for="item in list" :key="item" class="col-outside" v-bind="colPhone" >
        <Card hoverable style="width: 240px">
          <img
            slot="cover"
            src="../../assets/header-left.jpg"
          />
          <CardMeta title="PPP">
            <template slot="description">
              {{item}}
            </template>
          </CardMeta>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Spin,Card, Row, Col} from 'ant-design-vue';

const CardMeta = Card.Meta
export default {
  name: 'PLoading',
  components:{
    Spin,Card,CardMeta,Row,Col
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
      colPhone: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 4
      }
    }
  },
  mounted(){
    setTimeout(() => {  // 模拟后台获取数据
      this.list = [1,2,3,4,5,6,7,8,9,10];
    },2000)
  }
}
</script>

<style lang="less" scoped>
  .col-outside{
    margin-top: 10px;
  }
  .test-loading{
    width:100%;
    height: 500px;
  }
</style>