<script setup lang="ts">
import NavBar from '../navigation/NavBar.vue'
import TopBar from '../navigation/TopBar.vue'
</script>

<template>
  <div class="relative">
    <TopBar />
    <slot></slot>
    <NavBar />
  </div>
</template>
