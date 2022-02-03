<template>
  <div>
    <h3 class="text-gray-500 text-xl tracking-widest">Your Favorite Movies</h3>
    <Movies :movies="favMovies" />
    <IsLoading :msg="msg" v-if="load" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import Movies from '../components/Movies.vue'
import IsLoading from '../components/IsLoading.vue'
const favMovies = ref(
  localStorage.getItem('favMovies')
    ? JSON.parse(localStorage.getItem('favMovies'))
    : []
)
const load = ref(false)
const msg = ref('')
onMounted(() => {
  if (favMovies.value.length < 1) {
    load.value = true
    msg.value = 'Empty'
  }
})
</script>

<style>
</style>