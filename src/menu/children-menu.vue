<template>
  <SubMenu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <Icon :type="menuInfo.icon" v-if="menuInfo.icon" />
      <span v-if="menuInfo.title">{{menuInfo.title}}</span>
      <span v-else-if="menuInfo.name">{{menuInfo.name}}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <MenuItem v-if="!item.children" :key="item.path" >
      <router-link :to="item.path"> 
        <Icon :type="item.icon" v-if="item.icon" />
        <span v-if="item.title">{{item.title}}</span>
        <span v-else-if="item.name">{{item.name}}</span>
      </router-link>
      </MenuItem>
      <ChildrenMenu v-else :key="item.path" :menuInfo="item" />
    </template>
  </SubMenu>
</template>

<script>
import { Icon, Menu } from 'ant-design-vue';

const {SubMenu} = Menu;
const {Item} = Menu;

export default {
  name: "ChildrenMenu",
  isSubMenu: true,
  components:{
    Icon,
    'SubMenu': SubMenu,
    'MenuItem': Item,
  },
  props:{
    ...SubMenu.props,
    menuInfo:{
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>