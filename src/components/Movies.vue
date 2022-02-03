<template>
  <div
    class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5"
  >
    <div
      class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <Movie :movie="movie" @favMovie="handleFav" />
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core'
import Movie from './Movie.vue'
const props = defineProps({
  movies: '',
})
const favMovies = ref(
  localStorage.getItem('favMovies')
    ? JSON.parse(localStorage.getItem('favMovies'))
    : []
)

const handleFav = (movie) => {
  const cek = favMovies.value.filter((m) => m.imdbID == movie.imdbID)
  if (cek.length > 0) {
    favMovies.value = favMovies.value.filter((m) => m.imdbID != movie.imdbID)
  } else {
    favMovies.value.push(movie)
  }
  setTimeout(() => {
    localStorage.setItem('favMovies', JSON.stringify(favMovies.value))
  }, 1000)
}
</script>

<style>
</style>