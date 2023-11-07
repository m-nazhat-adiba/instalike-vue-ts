<script setup lang="ts">
import axios from 'axios'
import Layout from '../../components/common/layout/Layout.vue'
import PostSkeleton from '../../components/timeline/postcard/PostSkeleton.vue'
import PostCard from '../../components/timeline/postcard/PostCard.vue'
import StoryCard from '../../components/timeline/story/StoryCard.vue'
import { onMounted, ref } from 'vue'

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const postData = ref<Array<Photo> | null>(null)

const fetchPhoto = async (): Promise<void> => {
  try {
    const response = await axios.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos')
    postData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchPhoto()
})
</script>

<template>
  <Layout>
    <section class="flex gap-8 px-5 my-4 overflow-x-scroll scrollbar-hide">
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </section>

    <section class="flex flex-col gap-10 my-10">
      <PostSkeleton v-if="!postData" />
      <PostSkeleton v-if="!postData" />
      <PostCard
        v-if="postData"
        v-for="item in postData"
        :key="item.id"
        :title="item.title"
        :url="item.url"
      />
    </section>
  </Layout>
</template>
