<template>
  <div class="cover-play-image">
    <img :src="picUrl" :alt="name">
    <div class="mask flex justify-center items-center">
      <NIcon :component="PlayCircle24Filled"
             class="text-white play-icon opacity-0 transition-opacity hover:text-teal-400" :size="50" @click="play"/>
    </div>
    <div
        v-if="showPlayCount"
        class="play-count">
      <NIcon :component="Headphones32Filled" class="mr-1" :size="12"/>
      <text>{{ useNumberFormat(playCount) }}
      </text>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PlayCircle24Filled, Headphones32Filled} from '@vicons/fluent'
import {NIcon} from 'naive-ui'
import {useNumberFormat} from "@/utils/number";

defineProps<{
  picUrl: string
  playCount: number
  name: string
  showPlayCount?: boolean
  play?: () => void
}>()
</script>

<style lang="scss">
.cover-play-image {
  @apply rounded-lg cursor-pointer transition-all relative overflow-hidden;
  @apply hover:-translate-y-1;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }

  .play-count {
    @apply absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-80 pl-2 pr-2 rounded-full pt-0.5 pb-0.5 flex items-center transition-all scale-90;
  }

  &:hover {
    .mask {
      @apply bg-opacity-50;
      .play-icon {
        @apply opacity-100;
      }
    }

    .play-count {
      @apply opacity-0;
    }
  }
}
</style>
