<template>
  <NConfigProvider>
    <NMessageProvider>
      <RouterView/>
    </NMessageProvider>
  </NConfigProvider>

</template>

<script setup lang="ts">
import {NConfigProvider, NMessageProvider} from 'naive-ui'
import {usePlayer} from "@/store/usePlayer";

const {} = usePlayer()
</script>
<style lang="scss">
</style>
