<script setup>
import Movie from "./Movie.vue";
const props = defineProps({
  movies: Array,
});
</script>

<template>
  <div
    class="mt-7 w-full flex flex-wrap justify-between gap-5 md:gap-8 lg:gap-5"
  >
    <div
      class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <Movie :movie="movie" />
    </div>
  </div>
</template>