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
            <a-menu-item v-for="miChild in mi.children" :key="miChild.key">
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

import {ADMIN_MENU, MenuItem} from "~/layouts/menu.admin";

useHead({
  script: [
    {src: 'https://kit.fontawesome.com/2d0edabe59.js', crossorigin: 'anonymous'},
  ],
});

const route = useRoute()
const menu = ref<MenuItem[]>(ADMIN_MENU);
const selectedKeys = computed({
  get() {
    return [findMenuItem(menu.value, route.path)?.key]
  },
  set() {
    //
  }
});

function findMenuItem(menuItems: MenuItem[], routePath: string): MenuItem | undefined {
  return menuItems.map(mi => {
    if (mi.link == routePath) return mi
    if (!!mi.children) return findMenuItem(mi.children, routePath)
    return undefined;
  }).find(mi => !!mi)
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