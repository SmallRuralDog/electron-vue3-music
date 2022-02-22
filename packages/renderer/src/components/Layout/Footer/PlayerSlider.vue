<template>
  <div class="player-slider">
    <VueSlider v-model="player.currentTime" :max="player.duration" :height="2" tooltip="none" :dotSize="7"
               class="cursor-pointer my-0.5 flex-shrink-0" @change="setCurrentTime" @dragging="player.sliderInput=true"
               @drag-end="dragEnd">
      <template v-slot:dot="{ value, focus }">
        <div :class="['custom-dot', { focus }]"></div>
      </template>
      <template v-slot:process="{ start, end, style, index }">
        <div class="vue-slider-process custom-class" :style="[style]">
        </div>
      </template>
    </VueSlider>
  </div>
</template>

<script setup lang="ts">
import VueSlider from 'vue-slider-component'
import {usePlayer} from "@/store/usePlayer";


const {player, setCurrentTime,dragEnd} = usePlayer();

</script>

<style lang="scss">
.player-slider {
  .vue-slider {
    .custom-dot {
      @apply bg-emerald-500 rounded-full bg-opacity-0 transition-all;
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

    &:hover {
      .custom-dot {
        @apply bg-opacity-100;
      }
    }
  }
}
</style>
