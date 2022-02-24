<template>
<div class="px-5 music">
  <Title class="text-3xl font-bold"  title="音乐馆"/>
  <n-affix>
    <n-tabs v-model:value="currentMenu" @update:value="onTabClick">
      <n-tab-pane v-for="menu in menus" :key="menu.name" :tab="menu.label" :name="menu.name"/>
    </n-tabs>
  </n-affix>
  <div>
    <RouterView/>
  </div>
</div>
</template>

<script setup lang="ts">

import Title from "@/components/Common/Title.vue";
import {NAffix,NTabs,NTabPane} from 'naive-ui'
import {useMusicMenu} from "@/views/Music/MusicController";

const {menus, currentMenu, onTabClick} = useMusicMenu()
</script>

<style lang="scss">

</style>
