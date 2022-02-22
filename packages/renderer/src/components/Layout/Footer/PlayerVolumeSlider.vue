<template>
  <div class="player-volume flex flex-col items-center  pt-2">
    <VueSlider v-model="player.volume" :max="100" :width="3" :height="100" tooltip="none" :dotSize="10" direction="btt"
               class="cursor-pointer" @change="setVolume">
      <template v-slot:dot="{ value, focus }">
        <div :class="['custom-dot', { focus }]"></div>
      </template>
      <template v-slot:process="{ start, end, style, index }">
        <div class="vue-slider-process custom-class" :style="[style]">
        </div>
      </template>
    </VueSlider>
    <small class="text-xs mt-1"><small>{{ player.volume }}</small></small>
    <div>静音</div>
  </div>
</template>

<script setup lang="ts">
import VueSlider from 'vue-slider-component'
import {toRefs} from "vue";
import {usePlayer} from "@/store/usePlayer";

const {player, setVolume} = toRefs(usePlayer())

</script>

<style lang="scss">
.player-volume {
  .vue-slider {
    .custom-dot {
      @apply bg-emerald-500 rounded-full  transition-all;
      width: 100%;
      height: 100%;
      transition: all .3s;
    }

    .vue-slider-rail {
      @apply bg-gray-200;
    }

    .vue-slider-process {
      @apply bg-emerald-500 rounded-none;
    }
  }
}
</style>
