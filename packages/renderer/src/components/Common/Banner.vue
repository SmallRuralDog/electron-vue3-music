<template>
  <Splide :options="{ rewind: true ,perPage:perPage,gap:'1.25rem',autoplay:true,}">
    <SplideSlide v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" alt="" class="banner-image" @click="onClick(item)">
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {useBanner} from "@/utils/api";
import {ref, onMounted} from "vue";
import {usePlayer} from "@/store/usePlayer";

defineProps<{
  perPage: number,
}>()
const banners = ref<Banner[]>([])
const getData = async () => {
  banners.value = await useBanner()
}
onMounted(getData)

const {play} = usePlayer()

const onClick = (banner: Banner) => {
  if (banner.targetType === 1) {
    play(banner.targetId)
  }
}
</script>

<style lang="scss" scoped>
.banner-image {
  @apply rounded-lg cursor-pointer transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
