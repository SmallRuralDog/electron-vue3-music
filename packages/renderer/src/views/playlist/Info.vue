<template>
  <div class="flex items-stretch">
    <img :src="playlist.coverImgUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0">
    <div class="pl-5 flex flex-col justify-between pt-2 flex-1">
      <div>
        <div class="text-3xl font-bold">{{ playlist.name }}</div>
        <div class="flex items-center text-xs text-gray-600 pb-2 pt-3">
          <NAvatar :src="playlist.creator.avatarUrl" size="small" round/>
          <span class="ml-2">{{ playlist.creator.nickname }}</span>
          <div class="ml-5 flex text-gray-500">
            <div class="ml-2 hover-text" v-for="tag in playlist.tags" :key="tag">#{{ tag }}</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text=" playlist.description" :end="90"/>
        </div>
      </div>
      <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
        <NButton class="w-32 bg-emerald-500 border-0 text-white" strong secondary round type="primary">
          <template #icon>
            <n-icon :component="Play20Filled"/>
          </template>
          <span>播放全部</span>
        </NButton>
        <NButton class="w-32 bg-gray-100" secondary round>
          <template #icon>
            <n-icon :component="Heart20Regular"/>
          </template>
          <span>收藏</span>
        </NButton>
        <NButton circle class="bg-gray-100" secondary>
          <template #icon>
            <n-icon :component="MoreHorizontal20Regular"/>
          </template>
        </NButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Play20Filled, Heart20Regular, MoreHorizontal20Regular} from '@vicons/fluent'
import {NAvatar, NButton} from 'naive-ui'
import MoreText from "@/components/Common/MoreText.vue";

defineProps<{
  playlist: PlayListDetail,
}>()
</script>
