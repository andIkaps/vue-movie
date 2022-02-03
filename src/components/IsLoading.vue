<template>
  <div class="mt-5 flex justify-center items-center">
    <h2 class="text-gray-300 animate-pulse">{{ msg }} . . .</h2>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'

const props = defineProps({
  msg: String,
})
</script>

<style>
</style>