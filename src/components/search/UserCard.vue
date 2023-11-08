<script setup lang="ts">
import { defineProps } from 'vue'

interface User {
  name: string
  username: string
  image: string
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
    <button class="px-3 py-1 bg-blue-500 rounded-full text-white">Follow</button>
  </div>
</template>
