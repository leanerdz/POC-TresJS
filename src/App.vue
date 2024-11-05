<script setup>
  import Tres from "./components/Tres.vue";
  import { TresCanvas, useTresContext } from '@tresjs/core'

</script>

<template>
  <TresCanvas clear-color="#82DBC5" shadows window-size>
    <Tres/>
  </TresCanvas>
</template>

<style scoped>
</style>
