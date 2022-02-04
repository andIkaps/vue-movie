<template>
  <div class="my-8 flex justify-center">
    <div class="flex flex-col items-center text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 class="text-lg">PAGE NOT FOUND</h3>
      <button class="mt-5 px-6 py-2 bg-blue-600 rounded-md" @click="back">
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
  router.go(-1)
}
</script>