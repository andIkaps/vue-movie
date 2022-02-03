<template>
  <form @submit.prevent="handleSearch">
    <div class="relative text-gray-300">
      <input
        type="text"
        placeholder="Search any movies . . . ."
        class="
          w-full
          px-14
          py-3
          rounded-md
          bg-stone-900
          border border-slate-300
          focus:ring focus:ring-slate-400 focus:ring-slate-400/50
          md:text-lg
          lg:w-3/6 lg:text-sm lg:px-10
        "
        v-model="keyword"
        @keydown.enter.prevent="handleSearch"
      />

      <svg
        class="
          w-5
          h-5
          absolute
          top-4
          left-5
          md:w-6 md:h-6
          lg:w-5 lg:h-5 lg:top-3.5 lg:left-3
        "
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Broken/Search">
          <g id="Search">
            <path
              id="Search_2"
              d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </div>
  </form>

  <div class="mt-3 md:mt-5" v-if="isRecent">
    <div class="flex items-center">
      <h3 class="text-gray-200 text-sm md:text-base md:tracking-wider mr-3">
        Recent
      </h3>
      <div
        class="flex items-center mx-1 my-2 text-red-500 cursor-pointer"
        @click="clearRecent"
      >
        <span class="tracking-wide md:text-lg lg:text-sm">Clear Recent</span>

        <svg
          class="w-4 h-4 ml-2 md:w-5 md:h-5 md:ml-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Iconly/Broken/Close Square">
            <g id="Close Square">
              <path
                id="Close Square_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2442 11.5779C21.6612 11.5779 22.0002 11.2389 22.0002 10.8219V8.25288C22.0002 4.39188 19.5902 1.99988 15.7532 1.99988H8.25324C4.39224 1.99988 2.00024 4.39188 2.00024 8.25588V15.7559C2.00024 19.6079 4.39224 21.9999 8.25324 21.9999H15.7562C19.6082 21.9999 22.0002 19.6079 21.9972 15.7529C21.9972 15.3309 21.6542 14.9879 21.2322 14.9879C20.8092 14.9879 20.4672 15.3309 20.4672 15.7529C20.4672 18.7869 18.7962 20.4669 15.7532 20.4669H8.25324C5.21024 20.4669 3.53024 18.7869 3.53024 15.7529V8.25288C3.53024 5.20988 5.21024 3.52988 8.25624 3.52988H15.7562C18.8002 3.52988 20.4702 5.19988 20.4702 8.25288V10.7949V10.7969C20.4712 11.2189 20.8132 11.5599 21.2352 11.5599V11.5779H21.2442ZM9.81504 13.1453L9.13104 13.8293C8.82604 14.1193 8.80904 14.6003 9.09304 14.9113L9.11504 14.9273C9.40704 15.2193 9.87704 15.2273 10.178 14.9453L10.859 14.2643C11.168 13.9763 11.185 13.4923 10.897 13.1823C10.608 12.8743 10.124 12.8563 9.81504 13.1453ZM15.1428 14.8032C14.8488 15.0962 14.3738 15.1022 14.0728 14.8152L14.0348 14.7782L9.25484 9.99918C8.96284 9.68918 8.95684 9.20718 9.24184 8.89118C9.53384 8.59218 10.0118 8.58618 10.3108 8.87818C10.3138 8.88018 10.3158 8.88218 10.3188 8.88518L12.1838 10.7512L13.8808 9.05318C14.1858 8.76218 14.6668 8.76518 14.9688 9.06018C15.0228 9.11418 15.0688 9.17518 15.1038 9.24318C15.2768 9.54418 15.2268 9.92218 14.9818 10.1682L13.2918 11.8572L15.1298 13.6962C15.4398 13.9892 15.4518 14.4782 15.1578 14.7872C15.1556 14.7906 15.1526 14.7934 15.1496 14.7962C15.1473 14.7984 15.145 14.8006 15.1428 14.8032Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="flex mt-3 flex-wrap justify-between h-12 overflow-auto">
      <div
        class="flex items-center m-1 text-zinc-400 md:m-2"
        v-for="recent in recents"
        :key="recent"
      >
        <span
          class="tracking-wide cursor-pointer md:text-lg"
          @click="changeKeyword"
          >{{ recent }}</span
        >

        <svg
          class="w-4 h-4 ml-2 md:w-5 md:h-5 md:ml-3 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="filterRecent($event)"
          :data-recent="recent"
        >
          <g id="Iconly/Broken/Close Square">
            <g id="Close Square">
              <path
                id="Close Square_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2442 11.5779C21.6612 11.5779 22.0002 11.2389 22.0002 10.8219V8.25288C22.0002 4.39188 19.5902 1.99988 15.7532 1.99988H8.25324C4.39224 1.99988 2.00024 4.39188 2.00024 8.25588V15.7559C2.00024 19.6079 4.39224 21.9999 8.25324 21.9999H15.7562C19.6082 21.9999 22.0002 19.6079 21.9972 15.7529C21.9972 15.3309 21.6542 14.9879 21.2322 14.9879C20.8092 14.9879 20.4672 15.3309 20.4672 15.7529C20.4672 18.7869 18.7962 20.4669 15.7532 20.4669H8.25324C5.21024 20.4669 3.53024 18.7869 3.53024 15.7529V8.25288C3.53024 5.20988 5.21024 3.52988 8.25624 3.52988H15.7562C18.8002 3.52988 20.4702 5.19988 20.4702 8.25288V10.7949V10.7969C20.4712 11.2189 20.8132 11.5599 21.2352 11.5599V11.5779H21.2442ZM9.81504 13.1453L9.13104 13.8293C8.82604 14.1193 8.80904 14.6003 9.09304 14.9113L9.11504 14.9273C9.40704 15.2193 9.87704 15.2273 10.178 14.9453L10.859 14.2643C11.168 13.9763 11.185 13.4923 10.897 13.1823C10.608 12.8743 10.124 12.8563 9.81504 13.1453ZM15.1428 14.8032C14.8488 15.0962 14.3738 15.1022 14.0728 14.8152L14.0348 14.7782L9.25484 9.99918C8.96284 9.68918 8.95684 9.20718 9.24184 8.89118C9.53384 8.59218 10.0118 8.58618 10.3108 8.87818C10.3138 8.88018 10.3158 8.88218 10.3188 8.88518L12.1838 10.7512L13.8808 9.05318C14.1858 8.76218 14.6668 8.76518 14.9688 9.06018C15.0228 9.11418 15.0688 9.17518 15.1038 9.24318C15.2768 9.54418 15.2268 9.92218 14.9818 10.1682L13.2918 11.8572L15.1298 13.6962C15.4398 13.9892 15.4518 14.4782 15.1578 14.7872C15.1556 14.7906 15.1526 14.7934 15.1496 14.7962C15.1473 14.7984 15.145 14.8006 15.1428 14.8032Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
const recents = ref(
  localStorage.getItem('recents')
    ? JSON.parse(localStorage.getItem('recents'))
    : []
)
const keyword = ref(
  localStorage.getItem('keyword')
    ? localStorage.getItem('keyword')
    : 'One Piece'
)
const isRecent = ref(localStorage.getItem('isRecent') == 'true' ? true : false)
const emit = defineEmits(['keyword'])

const handleSearch = () => {
  localStorage.setItem('keyword', keyword.value)
  localStorage.setItem('isRecent', true)

  isRecent.value = true
  let str = keyword.value.toLowerCase()
  str = str.trim()
  if (keyword.value) {
    const cek = recents.value.filter((item) => item == str)
    if (cek.length < 1) {
      recents.value.push(str)
      localStorage.setItem('recents', JSON.stringify(recents.value))
    }
    emit('keyword', str)
  }
}
const clearRecent = () => {
  recents.value = []
  isRecent.value = false
  localStorage.setItem('recents', JSON.stringify([]))
  localStorage.setItem('isRecent', false)
}
const filterRecent = (e) => {
  recents.value = recents.value.filter(
    (recent) => recent != e.target.dataset.recent
  )
  if (recents.value.length == 0) {
    isRecent.value = false
  }
}
const changeKeyword = (e) => {
  keyword.value = e.target.innerHTML
  emit('keyword', keyword.value)
  localStorage.setItem('keyword', e.target.innerHTML)
}
</script>

<style>
</style>