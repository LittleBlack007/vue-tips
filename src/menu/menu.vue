<template>
  <div class="menu">
    <Menu mode="inline" theme="light" :inline-collapsed="collapsed">
      <template v-for="item in list">
        <MenuItem v-if="!item.children" :key="item.key">
          <Icon :type="icon" />
          <span>{{item.title}}</span>
        </MenuItem>
        <ChildrenMenu v-else :key="item.key" :menu-info="item" />
      </template>
    </Menu>
    <Row>
      <Button @click="toggleCollapsed"><Icon :type="menuToggleIcon" /></Button>
    </Row>
  </div>
</template>

<script>
import {Menu,Button,Icon} from 'ant-design-vue';
import ChildrenMenu from './children-menu.vue';

export default {
  name: 'Menu',
  components:{
    Menu,Button,Icon,
    ChildrenMenu
  },
  data(){
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          icon:'pie-chart',
          title: 'Option 1',
        },
        {
          key: '2',
          title: 'Navigation 2',
          icon:'pie-chart',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              icon:'mail',
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
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/.menu{
    width: 256px;
  }
</style>>