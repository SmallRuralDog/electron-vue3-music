<template>
  <div class="flex justify-end items-center text-stone-500 gap-x-2.5">
    <span class="text-xs text-stone-500">
      {{ useFormatDuring(player.currentTime) }} / {{ useFormatDuring(player.duration) }}
    </span>
    <NIcon :component="LyricIcon" size="20" class="hover-text"></NIcon>
    <div class="flex items-center hover-text">
      <NIcon :component="PlayList" size="20" class=""></NIcon>
      <span class="text-xs">40</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NIcon} from 'naive-ui'
import PlayList from "../../Icon/PlayList.vue";
import LyricIcon from "../../Icon/LyricIcon.vue";
import {toRefs} from "vue";
import {usePlayer} from "@/store/usePlayer";
import {useFormatDuring} from "@/utils/number";

const {player} = toRefs(usePlayer())
</script>

<style lang="scss">

</style>
