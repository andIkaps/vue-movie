<script setup>
import { onMounted } from "@vue/runtime-core";
import Movies from "../components/Movies.vue";
import IsLoading from "../components/IsLoading.vue";
import { useFavoritStore } from "../store/favorit";
import { useMoviesStore } from "../store/movies";
const store = useFavoritStore();
const moviesStore = useMoviesStore();

onMounted(() => {
  if (store.favMovies.length < 1) {
    moviesStore.isLoading = true;
    moviesStore.loadingMessage = "Empty";
  }
});
</script>

<template>
  <main>
    <h3 class="text-gray-500 text-xl tracking-widest">Your Favorite Movies</h3>
    <Movies :movies="store.favMovies" />
    <IsLoading v-if="moviesStore.isLoading" />
  </main>
</template>
