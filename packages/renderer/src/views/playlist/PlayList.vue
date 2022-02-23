<template>
  <div class="p-5" v-if="playlist">
    <Info :playlist="playlist"/>
    <div class="mt-5">
      <NTabs>
        <NTabPane :name="`歌曲 ${songs?.length || ''}`">
          <SongList :songs="songs"/>
        </NTabPane>
        <NTabPane name="评论">456</NTabPane>
        <NTabPane name="订阅者">789</NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {NTabs, NTabPane} from "naive-ui";
import {usePlayListDetail} from "@/utils/api";
import Info from "@/views/playlist/Info.vue";
import SongList from "@/views/playlist/SongList.vue";

const route = useRoute();
const playlist = ref<PlayListDetail>();
const songs = ref<Song[]>([]);
const id: number = Number(route.query.id);
const getData = async () => {
  const res = await usePlayListDetail(id)
  playlist.value = res.playlist
  songs.value = res.songs
}
onMounted(getData)
</script>

<style lang="scss">

</style>
