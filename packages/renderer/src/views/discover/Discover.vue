<template>
  <div class="p-5">
    <Banner :per-page="3"/>
    <Personalized/>
    <PersonalizedNewSong/>
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Common/Banner.vue";
import Personalized from "@/views/discover/Personalized.vue";
import PersonalizedNewSong from "@/views/discover/PersonalizedNewSong.vue";

</script>

<style lang="scss">

</style>
