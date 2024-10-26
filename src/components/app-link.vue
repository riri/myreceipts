<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

/* example to add a custom class to inactive links:
const props = defineProps({
  ...RouterLink.props,
  inactiveClass: String,
})*/
const props = defineProps({...RouterLink.props})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot/>
  </a>
  <router-link v-else v-bind="$props"><slot/></router-link>
</template>
