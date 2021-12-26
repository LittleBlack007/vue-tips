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
      <Row>
        <FormItem label="附件">
          <Dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          :customRequest="customRequest"
        >
          <p class="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
        </FormItem>
      </Row>
    </Form>
    <Button type="primary" @click="handleSubmit">提交</Button>
  </div>
</template>

<script>
import {Form, Select, Input, Row, Col, Button, Upload, Icon} from 'ant-design-vue';

const FormItem = Form.Item;
const Option = Select.Option;
const Dragger = Upload.Dragger

export default {
  name: 'myForm',
  components:{
    Form,FormItem,
    Select,Option,Input,
    Row,Col,Dragger,Button,Icon
  },
  data(){
    return {
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods:{
    customRequest(file){
      file.Success = 20;
      setTimeout(() =>{
        file.percent = 100;
      },2000)
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
      //return [{name:123,uid: new Date().getTime()}];
    },
    handleSubmit(e) {
      this.form.setFieldsValue({dragger: [{name:123,uid: new Date().getTime()}]})
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