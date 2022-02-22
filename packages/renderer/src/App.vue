<template>
  <NConfigProvider>
    <NMessageProvider>
      <RouterView/>
    </NMessageProvider>
  </NConfigProvider>

</template>

<script setup lang="ts">
import {NConfigProvider, NMessageProvider} from 'naive-ui'
</script>
<style lang="scss">
</style>
