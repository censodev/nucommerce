<template>
  <a-layout has-sider>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
        collapsed-width="0">
      <div class="logo"></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="mi in menu">
          <NuxtLink v-if="!mi.children" :to="mi.link">
            <a-menu-item :key="mi.key">
              <template #icon>
                <i :class="mi.icon"></i>
              </template>
              <span class="nav-text">{{ mi.title }}</span>
            </a-menu-item>
          </NuxtLink>
          <a-sub-menu v-if="!!mi.children">
            <template #icon>
              <i :class="mi.icon"></i>
            </template>
            <template #title>{{ mi.title }}</template>
            <a-menu-item  v-for="miChild in mi.children" :key="miChild.key">
              <NuxtLink :to="miChild.link">
                {{ miChild.title }}
              </NuxtLink>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', minHeight: '100vh' }">
      <a-layout-header class="p-0"/>
      <a-layout-content class="mx-4 my-4 py-3 px-4 bg-white">
        <slot/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {src: 'https://kit.fontawesome.com/2d0edabe59.js', crossorigin: 'anonymous'},
  ],
});

const route = useRoute()
const menu = ref<MenuItem[]>([
  {
    key: '1', title: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    link: '/admin',
  },
  {
    key: '2', title: 'Categories',
    link: '/admin/categories',
    icon: 'fas fa-boxes'
  },
  {
    key: '3', title: 'Products',
    link: '/admin/products',
    icon: 'fas fa-box'
  },
  {
    key: '4', title: 'Orders',
    link: '/admin/orders',
    icon: 'fas fa-coins',
  },
  {
    key: '5', title: 'Homepage',
    link: '/admin/cms/homepage',
    icon: 'fas fa-laptop-house'
  },
  {
    key: '6', title: 'Landing pages',
    link: '/admin/cms/homepage',
    icon: 'fas fa-pager'
  },
  {
    key: '7', title: 'Media',
    link: '/admin/cms/media',
    icon: 'fas fa-photo-video'
  },
  {
    key: '8', title: 'Articles',
    link: '/admin/cms/articles',
    icon: 'fas fa-newspaper'
  },
  {
    key: '9', title: 'Seeding',
    link: '/admin/cms/seeding',
    icon: 'fas fa-seedling'
  },
  {
    key: '10', title: 'Accounts',
    link: '/admin/accounts',
    icon: 'fas fa-users'
  },
  {
    key: '11', title: 'Settings',
    icon: 'fas fa-cogs',
    children: [
      {
        key: '12', title: 'Footer',
        link: '/admin/settings/about',
      },
      {
        key: '13', title: 'Contacts',
        link: '/admin/settings/about',
      },
    ],
  },
]);
const selectedKeys = computed(() => {
  return menu.value.filter(mi => route.path == mi.link).map(mi => mi.key)
});

interface MenuItem {
  key: string;
  title: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
}
</script>

<style scoped>
.ant-layout-header {
  background: white;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: white;
}
</style>