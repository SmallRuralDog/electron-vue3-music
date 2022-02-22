<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col ">
      <div class="h-14">
        <Header/>
      </div>
      <div class="flex-1 overflow-hidden">
        <NScrollbar>
          <RouterView/>
        </NScrollbar>
      </div>
      <div class="h-20">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NScrollbar} from 'naive-ui'
import Menu from "@/components/Layout/Menu/Menu.vue";
import Header from "@/components/Layout/Header/Header.vue";
import Footer from "@/components/Layout/Footer/Footer.vue";
</script>
<style lang="scss">
</style>
