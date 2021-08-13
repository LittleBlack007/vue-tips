<template>
  <div style="width: 256px">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <ChildrenMenu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Icon, Button, Menu } from 'ant-design-vue';
import ChildrenMenu from './children-menu.vue';
const {Item,SubMenu} = Menu;
const MSubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <MSubMenu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'MSubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  components:{
    'a-menu': Menu,
    'a-sub-menu': SubMenu,
    'a-icon':Icon,
    'a-button': Button,
    'a-menu-item': Item
  },
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  components: {
    MSubMenu,ChildrenMenu,
    'a-menu': Menu,
    'a-sub-menu': SubMenu,
    'a-icon':Icon,
    'a-button': Button,
    'a-menu-item': Item
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
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
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>