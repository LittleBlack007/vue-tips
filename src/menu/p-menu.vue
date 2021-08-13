<template>
  <div class="menu" >
    <Menu mode="inline" theme="light" :inline-collapsed="collapsed">
      <template v-for="item in list">
        <MenuItem v-if="!item.children" :key="item.key" v-bind="$props" v-on="$listeners">
          <Icon :type="item.icon" />
          <span>{{item.title}}</span>
        </MenuItem>
        <ChildrenMenu v-else :key="item.key" :menuInfo="item" />
      </template>
    </Menu>
    <Row>
      <Button @click="toggleCollapsed" :style="{width: collapsed ? '80px' : menuWidth+'px'}" class="collaspedBtn"><Icon :type="menuToggleIcon" /></Button>
    </Row>
  </div>
</template>

<script>
import {Button,Icon,Row, Menu} from 'ant-design-vue';
import ChildrenMenu from './children-menu.vue';
const {Item} = Menu;

export default {
  name: 'PMenu',
  components:{
    Button,Icon,Row,Menu,
    ChildrenMenu,
    'MenuItem': Item
  },
  props:{
    menuWidth:{
      type: Number,
      default: 210
    }
  },
  data(){
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          icon: 'mail',
          title: 'Option 1',
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
            },
          ],
        },
      ],
    }
  },
  computed:{
    menuToggleIcon(){
       return this.collapsed ? 'menu-unfold' : 'menu-fold';
    }
  },
  methods:{
    toggleCollapsed(){
      this.collapsed = !this.collapsed;
      let width = this.collapsed ? 80 : this.menuWidth;
      this.$emit('toggleCollapsedWidth',width);
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/.menu{
    height: 95%;
  }
  /deep/.ant-menu{
    opacity: .7;
    text-align: left;
  }
  /deep/.collaspedBtn{
    opacity: .6;
    transition: width .1s;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
  }
</style>>