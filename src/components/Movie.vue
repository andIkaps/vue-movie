<template>
    <div class="w-full h-48 rounded-md overflow-hidden bg-gray-50 lg:h-64">
        <router-link
            :to="{ name: 'Details', params: { id: movie.imdbID } }"
            class="w-full h-full"
        >
            <div v-if="movie.Poster != 'N/A'" class="w-full h-full">
                <img
                    :src="movie.Poster"
                    class="
                        w-full
                        h-full
                        aspect-auto
                        md:object-cover
                        lg:aspect-auto
                    "
                    :alt="movie.Title"
                />
            </div>
            <div v-else>
                <img
                    src="../assets/no-image.png"
                    class="w-full h-full object-cover"
                    :alt="movie.Title"
                />
            </div>
        </router-link>
    </div>

    <div class="mt-4 w-full">
        <div class="text-red-200 flex items-center justify-between">
            <router-link
                :to="{ name: 'Details', params: { id: movie.imdbID } }"
            >
                <h3 class="font-medium text-md tracking-wide">{{ title }}</h3>
            </router-link>

            <button
                class="cursor-pointer"
                @click="toggleFav(movie.imdbID, $event)"
            >
                <svg
                    class="w-5 h-5"
                    :class="{ 'text-red-600': isFav(movie.imdbID) }"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Iconly/Broken/Heart">
                        <g id="Heart">
                            <path
                                id="Heart_2"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.5206 2.8027C19.1348 3.30469 20.4771 4.45775 21.2354 5.99382C22.122 7.85558 22.2427 10.0008 21.5707 11.9536C20.9521 13.7513 19.938 15.3809 18.6059 16.7178C17.7325 17.6155 16.7914 18.442 15.7912 19.1898L15.7383 19.2347C15.406 19.4584 14.9591 19.3706 14.7324 19.037C14.6171 18.8759 14.5708 18.674 14.6041 18.4776C14.6373 18.2811 14.7473 18.1067 14.9088 17.9942C15.8474 17.2871 16.7323 16.5088 17.5559 15.6661C18.7421 14.4987 19.648 13.0683 20.203 11.4861C20.7368 9.90956 20.6288 8.18086 19.903 6.68598C19.3189 5.51 18.2899 4.62715 17.053 4.24096C15.4753 3.73838 13.7565 4.04305 12.4382 5.05896C12.1762 5.25674 11.818 5.25674 11.5559 5.05896C10.2382 4.04164 8.5187 3.73684 6.94115 4.24096C5.69596 4.61862 4.65663 5.4988 4.06466 6.67699C3.35526 8.17077 3.25377 9.88955 3.78231 11.4592C4.33967 13.0376 5.24529 14.4645 6.42938 15.6301C8.179 17.3392 10.1083 18.8465 12.1824 20.1246C12.4461 20.3111 12.5621 20.6493 12.4697 20.9625C12.3773 21.2757 12.0974 21.4927 11.7765 21.5C11.6318 21.5008 11.4903 21.457 11.3706 21.3741C9.21007 20.0429 7.20077 18.4723 5.37938 16.6908C4.03993 15.3583 3.02208 13.7276 2.40583 11.9266C1.75701 9.97655 1.8902 7.84437 2.77642 5.99382C3.5347 4.45775 4.87695 3.30469 6.49115 2.8027C8.34706 2.21871 10.3607 2.48784 12.0059 3.53981C13.6511 2.48784 15.6647 2.21871 17.5206 2.8027ZM16.7971 9.68833C16.7602 8.85762 16.2172 8.13914 15.4383 7.89052C15.1487 7.70632 15.02 7.34441 15.1267 7.01402C15.2334 6.68363 15.5479 6.47024 15.8883 6.49721C17.2039 6.92033 18.1404 8.10845 18.2618 9.50855C18.2867 9.70431 18.2335 9.90206 18.1141 10.0575C17.9946 10.213 17.819 10.3131 17.6265 10.3355C17.2224 10.3887 16.8519 10.0997 16.7971 9.68833Z"
                                fill="currentColor"
                            />
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="text-gray-200 flex mt-3 items-center font-medium text-sm">
            <svg
                class="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Iconly/Broken/Calendar">
                    <g id="Calendar">
                        <path
                            id="Calendar_2"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.4522 2.73508V3.76997C19.4609 4.06186 21 5.72477 21 8.71446V16.9848C21 20.3106 19.1043 22 15.3739 22H8.62609C4.89565 22 3 20.3106 3 16.9848V8.71446C3 6.72428 3.67826 5.30019 5.06957 4.46874C5.28888 4.31904 5.57263 4.30859 5.80202 4.44176C6.0314 4.57494 6.16687 4.82876 6.15169 5.09698C6.13652 5.3652 5.97333 5.60155 5.73043 5.70708C4.8087 6.25548 4.37391 7.21077 4.37391 8.71446V8.97981H17.0609C17.4403 8.97981 17.7478 9.29266 17.7478 9.67859C17.7478 10.0645 17.4403 10.3774 17.0609 10.3774H4.37391V16.9848C4.37391 19.5233 5.6087 20.5759 8.62609 20.5936H15.3739C18.3478 20.5936 19.6174 19.5145 19.6174 16.9759V8.70561C19.6174 6.4943 18.6522 5.42403 16.4522 5.16752V5.83975C16.4014 6.19806 16.093 6.45964 15.7374 6.44599C15.3818 6.43234 15.0936 6.14786 15.0696 5.78668V2.67316C15.0763 2.48618 15.1565 2.30977 15.2921 2.18341C15.4278 2.05706 15.6076 1.99132 15.7913 2.00092C16.17 2.02461 16.4623 2.34923 16.4522 2.73508ZM8.70877 6.29279C8.57806 6.42409 8.40109 6.49667 8.21739 6.4943C7.8414 6.48465 7.54295 6.16923 7.54783 5.78668V2.73508C7.58736 2.37709 7.88498 2.10645 8.23913 2.10645C8.59328 2.10645 8.8909 2.37709 8.93043 2.73508V3.69921H12.8609C13.2403 3.69921 13.5478 4.01206 13.5478 4.39798C13.5478 4.7839 13.2403 5.09675 12.8609 5.09675H8.91304V5.79553C8.91306 5.9824 8.83949 6.16149 8.70877 6.29279ZM16.1913 12.6152C15.7111 12.6152 15.3217 13.0112 15.3217 13.4997C15.3217 13.9882 15.7111 14.3843 16.1913 14.3843C16.6716 14.3843 17.0609 13.9882 17.0609 13.4997C17.0609 13.2636 16.9681 13.0373 16.8031 12.8711C16.6382 12.705 16.4147 12.6128 16.1826 12.6152H16.1913ZM11.1478 13.4997C11.1478 13.0112 11.5371 12.6152 12.0174 12.6152C12.4976 12.6152 12.887 13.0112 12.887 13.4997C12.887 13.9882 12.4976 14.3843 12.0174 14.3843C11.5371 14.3843 11.1478 13.9882 11.1478 13.4997ZM7.85217 12.6152C7.37193 12.6152 6.98261 13.0112 6.98261 13.4997C6.98261 13.9882 7.37193 14.3843 7.85217 14.3843C8.33242 14.3843 8.72174 13.9882 8.72174 13.4997C8.72175 13.2636 8.62894 13.0373 8.46398 12.8711C8.29902 12.705 8.0756 12.6128 7.84348 12.6152H7.85217ZM15.3217 17.082C15.3217 16.5935 15.7111 16.1975 16.1913 16.1975H16.1826C16.4147 16.1952 16.6382 16.2873 16.8031 16.4534C16.9681 16.6196 17.0609 16.8459 17.0609 17.082C17.0609 17.5706 16.6716 17.9666 16.1913 17.9666C15.7111 17.9666 15.3217 17.5706 15.3217 17.082ZM12.0174 16.1975C11.5371 16.1975 11.1478 16.5935 11.1478 17.082C11.1478 17.5706 11.5371 17.9666 12.0174 17.9666C12.4976 17.9666 12.887 17.5706 12.887 17.082C12.887 16.5935 12.4976 16.1975 12.0174 16.1975ZM6.98261 17.082C6.98261 16.5935 7.37193 16.1975 7.85217 16.1975H7.84348C8.0756 16.1952 8.29902 16.2873 8.46398 16.4534C8.62894 16.6196 8.72175 16.8459 8.72174 17.082C8.72174 17.5706 8.33242 17.9666 7.85217 17.9666C7.37193 17.9666 6.98261 17.5706 6.98261 17.082Z"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </svg>

            {{ movie.Year }}
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { onUpdated, watchEffect } from '@vue/runtime-core'
import axios from 'axios'
import getMovie from '../api/getMovie'

const props = defineProps({
    movie: '',
})
const emit = defineEmits(['favMovie'])
const title = props.movie.Title.substr(0, 15) + '...'
const favMovies = ref(
    localStorage.getItem('favMovies')
        ? JSON.parse(localStorage.getItem('favMovies'))
        : []
)

const toggleFav = (id, e) => {
    // console.log(id)
    // const cek = localStorage.getItem('favMovies') ? JSON.parse(localStorage.getItem('favMovies')) : [].filter( (movie) => movie.imdbID == id)
    const favMovies = JSON.parse(localStorage.getItem('favMovies'))
    if (favMovies) {
        const cek = favMovies.filter((movie) => movie.imdbID == id)
        if (cek.length > 0) {
            // remove fav
            const movie = {
                imdbID: cek[0].imdbID,
                Title: cek[0].Title,
                Poster: cek[0].Poster,
                Year: cek[0].Year,
            }
            emit('favMovie', movie)
            e.target.classList.remove('text-red-600')
        } else {
            // add fav
            e.target.classList.add('text-red-600')
            axios
                .get(
                    `${import.meta.env.VITE_API_URL}?apikey=${
                        import.meta.env.VITE_API_KEY
                    }&i=${id}`
                )
                .then((res) => {
                    const { data } = res
                    const movie = {
                        imdbID: data.imdbID,
                        Title: data.Title,
                        Poster: data.Poster,
                        Year: data.Year,
                    }
                    emit('favMovie', movie)
                })
                .catch((err) => console.log(err))
        }
    } else {
        // add fav
        e.target.classList.add('text-red-600')
        axios
            .get(
                `${import.meta.env.VITE_API_URL}?apikey=${
                    import.meta.env.VITE_API_KEY
                }&i=${id}`
            )
            .then((res) => {
                const { data } = res
                const movie = {
                    imdbID: data.imdbID,
                    Title: data.Title,
                    Poster: data.Poster,
                    Year: data.Year,
                }
                emit('favMovie', movie)
            })
            .catch((err) => console.log(err))
    }
}
const isFav = (imdbID) => {
    if (favMovies.value) {
        const result = favMovies.value.filter((movie) => movie.imdbID == imdbID)
        if (result.length > 0) {
            return true
        } else {
            return false
        }
    }
}
</script>

<style>
</style>