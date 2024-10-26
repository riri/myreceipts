<script setup>
import { onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate(async (to, from) => {
  // react to route change
})
</script>

<template>
  <h2>Recipe {{ $route.params.id }}</h2>
</template>
