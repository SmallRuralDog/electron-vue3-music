<template>
  <Title title="你的专属歌单"/>
  <div class="grid grid-flow-row grid-cols-5 gap-5 2xl:grid-cols-10">
    <div v-for="(item,index) in data" :key="item" :class="{'item-1':index===0}"
         @click="router.push({name:'playlist',query:{id:item.id}})">
      <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="item.playCount" show-play-count/>
      <div class="mt-2 text-xs text-gray-700 truncate">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NCard} from 'naive-ui'
import Title from "@/components/Common/Title.vue";

import {useRouter} from "vue-router";
import {useBanner, usePersonalized} from "@/utils/api";
import {onMounted, ref} from "vue";
import CoverPlay from "@/components/Common/CoverPlay.vue";

const router = useRouter();
const data = ref<Personalized[]>([]);

const getData = async () => {
  data.value = await usePersonalized()
}
onMounted(getData)

</script>

<style lang="scss">

</style>
