<script setup lang="ts">
import axios from 'axios'
import Layout from '../../components/common/layout/Layout.vue'
import UserCard from '../../components/search/UserCard.vue'
import { onMounted, ref } from 'vue'

interface User {
  name: string
  username: string
  image: string
}

const userData = ref<Array<User> | null>(null)

const fetchUserData = async () => {
  try {
    const response = axios.get('https://dummyjson.com/users')
    userData.value = (await response).data.users.map((item) => ({
      name: `${item.firstName} ${item.lastName}`,
      username: item.username,
      image: item.image
    }))
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchUserData()
})
</script>

<template>
  <Layout>
    <header class="px-5 font-bold mt-4 mb-5">
      <h1>Discover People</h1>
    </header>
    <section class="flex flex-col px-5 gap-8">
      <UserCard
        v-for="(item, key) in userData"
        :key="key"
        :name="item.name"
        :username="item.username"
        :image="item.image"
      />
    </section>
  </Layout>
</template>
