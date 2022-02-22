<template>
  <div class="flex">
    <NAvatar :size="45" :src="player.song.al?.picUrl"/>
    <div class="ml-2 text-xs flex flex-col justify-between py-0.5">
      <NEllipsis class="w-52 2xl:w-96 cursor-pointer">
        <span>{{ player.song.name || '网易云音乐' }}</span>
        <span class="ml-2 text-stone-500">- {{ player.song.ar?.first().name || `我爱听` }}</span>
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
import {NAvatar, NEllipsis, NBadge, NIcon} from 'naive-ui'
import {Heart20Regular, MailInboxArrowDown20Regular, MoreCircle20Regular, Comment20Regular} from '@vicons/fluent'
import {toRefs} from "vue";
import {usePlayer} from "@/store/usePlayer";


const {player} = toRefs(usePlayer())
</script>

<style lang="scss">
.n-badge {
  .n-badge-sup {
    @apply scale-75 left-1 bg-stone-100 text-stone-500 bg-opacity-80;
  }
}

</style>
