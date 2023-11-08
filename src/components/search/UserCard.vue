<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface User {
  name: string
  username: string
  image: string
}

const isFollowed = ref<boolean>(false)

const handleFollow = () => {
  isFollowed.value = !isFollowed.value
}

const { name, username, image } = defineProps<User>()
</script>

<template>
  <div class="flex w-full items-center">
    <img :src="image" class="h-12 w-12 rounded-full bg-gray-300" />
    <div class="flex flex-col flex-grow ml-3">
      <h1 class="font-semibold">{{ name }}</h1>
      <p class="text-sm">{{ username }}</p>
    </div>
    <button
      @click="handleFollow"
      :class="{
        'px-3 py-1 bg-blue-500 rounded-full text-white': !isFollowed,
        'px-3 py-1 bg-white rounded-full text-black': isFollowed
      }"
    >
      <p v-if="!isFollowed">Follow</p>
      <p v-if="isFollowed">Followed</p>
    </button>
  </div>
</template>
