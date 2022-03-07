<template>
    <div>
        <Search @keyword="handleKeyword" />

        <Movies :movies="movies" v-if="loadAMovie" />
        <IsLoading :msg="msg" v-if="load" />
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Movies from '../components/Movies.vue'
import Search from '../components/Search.vue'
import IsLoading from '../components/IsLoading.vue'
import getMovies from '../api/getMovies'

const { movies, load, msg, loadAMovie, totalResults, loadMovies, nextPages } =
    getMovies

const keyword = ref(
    localStorage.getItem('keyword')
        ? localStorage.getItem('keyword')
        : 'One Piece'
)

const bottom = ref('')

const handleKeyword = (kata) => {
    keyword.value = kata
    loadMovies(keyword.value)
    setTimeout(() => {
        totalPage = Math.ceil(totalResults.value / 10)
    }, 1000)
    page.value = 1
}

loadMovies(keyword.value)

const page = ref(1)
let totalPage = 0
setTimeout(() => {
    totalPage = Math.ceil(totalResults.value / 10)
}, 1000)
window.onscroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        page.value = page.value + 1
        if (page.value <= totalPage) {
            nextPages(page.value, keyword.value)
        }
    }
}
</script>

<style>
</style>