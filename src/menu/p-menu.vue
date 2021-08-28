<template>
    <div class="menu-list" >
    <Menu 
      mode="inline" 
      theme="light" 
      :inline-collapsed="collapsed"
      v-model="selectedKeyArr"
      :openKeys="openedMenuKeyArr"
      @openChange="onOpenChange"
    >
      <template v-for="item in list">
        <MenuItem v-if="!item.children" :key="item.path" v-bind="$props" v-on="$listeners">
        <router-link :to="item.path">
          <Icon :type="item.icon" v-if="item.icon" />
          <span v-if="item.title">{{item.title}}</span>
          <span v-else-if="item.name">{{item.name}}</span>
        </router-link>
        </MenuItem>
        <ChildrenMenu v-else :key="item.path" :menuInfo="item" />
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
      selectedKeyArr: [],
      openedMenuKeyArr: [],
      collapsed: false,
    }
  },
  computed:{
    menuToggleIcon(){
       return this.collapsed ? 'menu-unfold' : 'menu-fold';
    }
  },
  watch:{
    "$route.path"(){
      return this.selectedKeyArr = [this.$route.path];
    }
  },
  methods:{
    toggleCollapsed(){
      this.collapsed = !this.collapsed;
      let width = this.collapsed ? 80 : this.menuWidth;
      this.$emit('toggleCollapsedWidth',width);
    },
    onOpenChange (openKeys) {
      //console.log("openKeys",openKeys);
    // 当菜单被展开时触发此处
      /* 
      经测试传入的变量openKeys是数组 点击已经展开的菜单时传入的是空数组
      点击未展开的菜单时传入的是【当前展开菜单的key,点击的菜单key】
      下面的if判断用openKeys === [] 无效 所以我只能判断数组length是否等于0
      */
      if (openKeys.length === 1) {
        this.openedMenuKeyArr = [openKeys[0]]
      }else if(openKeys.length === 2){
         this.openedMenuKeyArr = [openKeys[1]]
      }else {
        this.openedMenuKeyArr = []
      }
    },
    getOpenKeyArr(list,path,openKeyArr){  // 通过path查找父级菜单  只考虑一个展开的情况
      //console.log(list,path,openKeyArr)
      list.map(i => {
        if(i.children && i.children.length >= 1){
          let key = i.path;
          for(let ic of i.children){
            //console.log(ic);
            if(ic.path === path){
              //console.log(ic)
              openKeyArr.push(key)
            }
            if(ic.children && ic.children.length >= 1){
              this.getOpenKeyArr(ic.children,path,openKeyArr)
            }
          }
        }
      })
    }
  },
  mounted(){
    let path = this.$route.path;
    this.$nextTick(() => {
      this.selectedKeyArr = [this.$route.path];
      this.getOpenKeyArr(this.list,path,this.openedMenuKeyArr)
    })
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
</style>>