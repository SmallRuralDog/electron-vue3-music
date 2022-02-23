<template>
  <div class="flex items-center justify-between drag pt-4">
    <div class="flex items-center pl-5">
      <NButton circle quaternary round @click="router.back()">
        <NIcon :component="ChevronLeft20Regular" size="20"/>
      </NButton>
      <NButton circle quaternary round @click="router.forward()">
        <NIcon :component="ChevronRight20Regular" size="20"/>
      </NButton>
      <div class="search no-drag">
        <NInput placeholder="搜索音乐、MV、歌单、用户" round class="bg-gray-100 text-xs border-0" size="small">
          <template #prefix>
            <n-icon :component="Search20Regular"/>
          </template>
        </NInput>
      </div>
    </div>
    <div class="flex items-center mr-5">
      <NSpace :size="5" align="center">
        <UserInfo/>
        <NButton circle quaternary round>
          <NIcon :component="ChevronDown20Regular" size="20"/>
        </NButton>
        <NButton circle quaternary round>
          <NIcon :component="Color20Regular" size="20"/>
        </NButton>
        <NButton circle quaternary round>
          <NIcon :component="Settings20Regular" size="20"/>
        </NButton>
        <NButton circle quaternary round>
          <NIcon :component="ResizeSmall20Regular" size="20"/>
        </NButton>

      </NSpace>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NButton, NIcon, NInput, NSpace} from 'naive-ui'
import {
  ChevronLeft20Regular,
  ChevronRight20Regular,
  ChevronDown20Regular,
  Search20Regular,
  Color20Regular,
  Settings20Regular,
  ResizeSmall20Regular,
} from '@vicons/fluent'
import {useRouter} from "vue-router";
import UserInfo from "./UserInfo.vue";

const router = useRouter();
</script>
<style lang="scss">
.search {
  @apply w-52 ml-3;
  .n-input__border {
    @apply border-0 ;
  }
}
</style>
