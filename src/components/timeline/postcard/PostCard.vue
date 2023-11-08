<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

interface Props {
  title: string
  url: string
}

const isLiked = ref<boolean>(false)
const props = defineProps<Props>()

const handleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center px-3 gap-2">
      <img class="rounded-full h-6 w-6" src="../../../assets/logo.svg" />
      <h1 class="font-bold">Username</h1>
    </div>
    <img :src="props.url" class="w-full h-auto" />
    <div class="flex gap-2 px-4 text-xl">
      <div v-if="!isLiked" @click="handleLike">
        <Icon icon="mdi:heart-outline" />
      </div>
      <div v-if="isLiked" @click="handleLike">
        <Icon icon="mdi:heart" color="red" />
      </div>
      <Icon icon="mynaui:chat" />
      <Icon icon="iconamoon:send-light" />
    </div>
    <p class="text-xs px-5">
      {{ props.title }}
    </p>
  </div>
</template>
