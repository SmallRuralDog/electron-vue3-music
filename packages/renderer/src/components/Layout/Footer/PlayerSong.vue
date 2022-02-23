<template>
  <div class="flex">
    <img alt="" class="w-10 h-10 rounded" :src="player.song.al?.picUrl || OpticalDisk"/>
    <div class="ml-2 text-xs flex flex-col justify-between">
      <NEllipsis class="w-52 2xl:w-96 cursor-pointer">
        <div class="flex">
          <div v-if="player.songUrl.freeTrialInfo?.end>0"
               class="bg-red-500  text-xs text-white rounded px-0.5 scale-75">试听
          </div>
          <span>{{ player.song.name || '开源云音乐' }}</span>
          <span class="ml-2 text-stone-500">- {{ player.song.ar?.first().name || `SmallRuralDog` }}</span>
        </div>
      </NEllipsis>
      <div class="flex gap-x-3 text-stone-500">
        <NIcon :component="Heart20Regular" size="20" class="hover-text"></NIcon>
        <NIcon :component="MailInboxArrowDown20Regular" size="20" class="hover-text"></NIcon>
        <NIcon :component="MoreCircle20Regular" size="20" class="hover-text"></NIcon>
        <NBadge :value="9999" :max="999">
          <NIcon :component="Comment20Regular" size="20" class="hover-text text-stone-500"></NIcon>
        </NBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NBadge, NEllipsis, NIcon} from 'naive-ui'
import {Comment20Regular, Heart20Regular, MailInboxArrowDown20Regular, MoreCircle20Regular} from '@vicons/fluent'
import {toRefs} from "vue";
import {usePlayer} from "@/store/usePlayer";
import {OpticalDisk} from '@/assets/img';

const {player} = toRefs(usePlayer())
</script>

<style lang="scss">
.n-badge {
  .n-badge-sup {
    @apply scale-75 left-1 bg-stone-100 text-stone-500 bg-opacity-80;
  }
}

</style>
