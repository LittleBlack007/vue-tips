<template>
  <SubMenu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <Icon :type="menuInfo.icon" />
      <span>{{menuInfo.title}}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <MenuItem v-if="!item.children" :key="item.key" >
        <Icon :type="item.icon" />
        <span>{{item.title}}</span>
      </MenuItem>
      <ChildrenMenu v-else :key="item.key" :menuInfo="item" />
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