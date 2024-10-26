<script setup>
import SiteNav from '@/components/site-nav.vue'
</script>
<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <site-nav/>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<style scoped>
</style>
