<template>
  <NScrollbar>
    <div class="mt-10 pl-6 pr-6 space-y-1.5" v-for="menuItem in menus">
      <div class="menu-title">{{ menuItem.name }}</div>
      <div
          class="menu-item"
          v-for="menu in menuItem.menus"
          :key="menu.key"
          :class="{ 'active': currentKey === menu.key }"
          @click="click(menu)"
      >
        <NIcon :component="menu.icon" :size="18"/>
        <span class="ml-1">{{ menu.name }}</span>
      </div>
    </div>
  </NScrollbar>
</template>

<script setup lang="ts">
import {NIcon, NScrollbar} from 'naive-ui';
import {userMenu} from './use'

const {menus, currentKey, click} = userMenu()

</script>


<style lang="scss">
.menu-title {
  @apply text-xs text-gray-400 pl-4 pr-4 pb-2;
}

.menu-item {
  @apply text-gray-600 text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
  @apply hover:bg-gray-200;
}

.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
