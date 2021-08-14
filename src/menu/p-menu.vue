<template>
    <div class="menu-list scroller" >
    <Menu mode="inline" theme="light" :inline-collapsed="collapsed">
      <template v-for="item in list">
        <MenuItem v-if="!item.children" :key="item.name" v-bind="$props" v-on="$listeners">
          <Icon :type="item.icon" v-if="item.icon" />
          <span v-if="item.title">{{item.title}}</span>
          <span v-else-if="item.name">{{item.name}}</span>
        </MenuItem>
        <ChildrenMenu v-else :key="item.name" :menuInfo="item" />
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
    },
    list:{
      type: Array,
      default: []
    }
  },
  data(){
    return {
      collapsed: false,
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
  .menu-list{
    height: calc(95% - 28px);
    max-height: calc(95% - 28px);
    overflow: hidden;
    overflow-y: auto;
  }
  /deep/.ant-menu{
    opacity: .7;
    text-align: left;
  }
  .collaspedBtn{
    opacity: .6;
    transition: width .1s;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
  }
  .scroller::-webkit-scrollbar {  // 滚动条的宽度
    width: 3px;
    height: 3px;
  }

  .scroller::-webkit-scrollbar-track {  // 滚动条轨道
      background-color:#F5F5F5;
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius:2em;
  }
  .scroller::-webkit-scrollbar-thumb {  // 滚动条滑块
      background-color:#c8c8c8;
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius:2em;
  }
</style>>