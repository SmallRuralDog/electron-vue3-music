<template>
  <div>
    <div class="flex text-xs text-gray-400 py-2">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/4">歌手</div>
      <div class="w-1/4">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm">
      <div class="flex song-item items-center w-full" :class="{'playing':player.id===song.id}" v-for="song in songs"
           :key="song.id" @dblclick="play(song.id)">
        <div class="flex-shrink-0 flex-1 flex items-center justify-between pr-5 ">

          <div class="items-center flex flex-1 w-10 flex-shrink-0">
            <n-icon :component="Heart24Regular" size="20"
                    class="text-gray-500 mr-1 cursor-pointer hover:text-red-400"/>
            <NEllipsis class="" style="max-width: 75%;">
              <small>{{ song.name }}</small>
            </NEllipsis>
            <n-icon v-if="song.h?.br===320000" class="ml-2 text-emerald-400" size="20"  :component="HighQualityFilled"/>
          </div>
          <div class="hidden icon-action flex-shrink-0">
            <div class="flex items-center gap-x-1.5 text-gray-400 ml-2  ">
              <n-icon title="播放" :component="Play24Regular" size="20" class="hover-text" @click="play(song.id)"/>
              <n-icon title="添加到" :component="AddSquare24Regular" size="20" class="hover-text"/>
              <n-icon title="下载" :component="ArrowSquareDown24Regular" size="20" class="hover-text"/>
              <n-icon title="更多操作" :component="MoreCircle20Regular" size="20" class="hover-text"/>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex-shrink-0">
          <NEllipsis class="w-9/12">
            <small class="truncate max-w-full">{{ song.ar.first().name }}</small>
          </NEllipsis>
        </div>
        <div class="w-1/4 flex-shrink-0">
          <NEllipsis class="w-9/12">
            <small class="truncate">{{ song.al.name }}</small>
          </NEllipsis>
        </div>
        <div class="w-20 flex-shrink-0 ">
          <NEllipsis class="w-20">
          <small>{{ useFormatDuring(song.dt / 1000) }}</small>
          </NEllipsis>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NTable, NEllipsis} from 'naive-ui'
import {
  Heart24Regular,
  Play24Regular,
  AddSquare24Regular,
  ArrowSquareDown24Regular,
  MoreCircle20Regular
} from '@vicons/fluent'
import {HighQualityFilled} from '@vicons/material'
import {useFormatDuring} from '@/utils/number'
import {usePlayer} from "@/store/usePlayer";

defineProps<{
  songs: Song[],
}>()

const {play, player} = usePlayer()

</script>

<style lang="scss" scoped>
.song-item {
  @apply py-2.5 pl-0.5;
  @apply hover:bg-gray-100;
  &:hover {
    .icon-action {
      @apply inline-block;
    }
  }
}

.playing {
  @apply bg-emerald-50;
}
</style>
