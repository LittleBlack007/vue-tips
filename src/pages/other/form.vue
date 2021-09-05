<template>
  <div>
    <Form :form="form" >
      <Row>
        <Col :span="8">
          <FormItem label="的看法啊：">
            <Input 
              allowClear
              v-decorator="[`field1`,{ rules: [{required: true,message: 'Input something!'}]}]"
            />
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem label="的看法啊：">
            <Input  
              v-decorator="[`field2`,{ rules: [{required: true,message: 'Input something!'}]}]"
            />
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem label="的看法啊：">
            <Select
              allowClear 
              v-decorator="[`field3`,{ rules: [{required: true,message: '请选择'}]}]" 
            >
              <Option value="a">A</Option>
              <Option value="b">B</Option>
              <Option value="c">C</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Button type="primary" @click="handleSubmit">提交</Button>
  </div>
</template>

<script>
import {Form, Select, Input, Row, Col, Button} from 'ant-design-vue';

const FormItem = Form.Item;
const Option = Select.Option;

export default {
  name: 'myForm',
  components:{
    Form,FormItem,
    Select,Option,Input,
    Row,Col
  },
  data(){
    return {
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods:{
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields().then(res => {
        console.log(res)
      }).catch(err => {
        console.log('err',err)
      })
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          return values
        }
      }).then(res => {
        console.log(123,res);
      })
    }
  }
}
</script>

<style>

</style>