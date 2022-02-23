<template>
  <Title title="推荐新音乐"/>
  <div class="grid grid-flow-row grid-cols-2 gap-y-2.5 gap-x-5 cursor-pointer">
    <div v-for="(item,index) in data" :key="index"
         class="hover:bg-gray-100 transition-all flex items-center" @click="play(item.id)">
      <img :src="item.picUrl" alt="" class="w-12 h-12 object-cover rounded "/>
      <div class="ml-2 text-xs flex-auto">
        <div class="text-sm">
          <span class="overflow-ellipsis">{{ item.name }}</span>
        </div>
        <div class="mt-1.5">
          <span class="text-gray-400">{{ item.song.artists[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {usePersonalizedNewSong} from "@/utils/api";
import Title from "@/components/Common/Title.vue";
import {usePlayer} from "@/store/usePlayer";

const {play} = usePlayer()
const router = useRouter();
const data = ref<PersonalizedNewSong[]>([]);

const getData = async () => {
  data.value = await usePersonalizedNewSong()
}
onMounted(getData)
</script>

<style lang="scss">

</style>
