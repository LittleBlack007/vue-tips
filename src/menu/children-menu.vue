<template>
  <SubMenu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <Icon :type="menuInfo.icon" />
      <span>{{menuInfo.title}}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <MenuItem :key="item.key" v-if="!item.children">
        <Icon :type="item.icon" />
        <span>{{item.title}}</span>
      </MenuItem>
      <ChildrenMenu v-else :key="item.key"/>
    </template>
  </SubMenu>
</template>

<script>
import {Menu, Icon} from 'ant-design-vue';

export default {
  name: "ChildrenMenu",
  isSubMenu: true,
  components:{
    Menu, Icon
  },
  props:{
    ...Menu.SubMenu.Props,
    menuInfo:{
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>