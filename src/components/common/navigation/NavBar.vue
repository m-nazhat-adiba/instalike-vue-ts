<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="flex bg-white shadow-lg sticky bottom-0 justify-between w-full h-auto py-4 px-7 text-2xl"
  >
    <RouterLink to="/">
      <Icon icon="akar-icons:home-alt1" />
    </RouterLink>
    <RouterLink to="/search">
      <Icon icon="akar-icons:search" />
    </RouterLink>
    <Icon icon="akar-icons:circle-plus" />
    <Icon icon="akar-icons:video" />
    <Icon icon="akar-icons:person" />
  </nav>
</template>
