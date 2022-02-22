<template>
  <NSpace justify="center" align="center" :size="20" class="text-zinc-700">
    <NIcon :component="ArrowRepeatAll20Regular" size="25" class="controller-icon" @click="toggleLoop"/>
    <NIcon :component="Previous24Filled" size="30" class="controller-icon"/>
    <NIcon :component="!player.isPause?PlayCircle24Filled:PauseCircle24Filled"
           size="50"
           class="controller-icon text-emerald-500"
           @click="togglePlay"/>

    <NIcon :component="Next24Filled" size="30" class="controller-icon" @click="next"/>
    <NPopover trigger="click">
      <template #trigger>
        <NIcon :component="Speaker148Regular" size="25" class="controller-icon"/>
      </template>
      <PlayerVolumeSlider/>
    </NPopover>

  </NSpace>

</template>

<script setup lang="ts">
import {NIcon, NPopover, NSpace} from 'naive-ui'
import {
  ArrowRepeatAll20Regular,
  Next24Filled,
  PlayCircle24Filled,
  PauseCircle24Filled,
  Previous24Filled,
  Speaker148Regular
} from '@vicons/fluent'
import PlayerVolumeSlider from "./PlayerVolumeSlider.vue";
import {usePlayer} from "@/store/usePlayer";
import {toRefs} from "vue";

const {toggleLoop, togglePlay, player, next} = toRefs(usePlayer())


</script>


<style lang="scss">
.controller-icon {
  @apply hover:text-emerald-400 cursor-pointer transition-colors;
}
</style>
