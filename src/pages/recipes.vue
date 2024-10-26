<script setup>
import { useRouter } from 'vue-router'
import { useRecipesStore } from '@/store'

const router = useRouter()
const recipes = useRecipesStore()

const go2About = () => router.push('/about')

</script>

<template>
  <h2>Home</h2>
  <button @click="go2About">Go to about</button>
  <ul>
    <li v-for="recipe in recipes.list()">
      <app-link :to="{name: 'recipe', params: {id: recipe.identifier}}">{{ recipe.name }}</app-link>
       - {{  recipe.description }}
    </li>
  </ul>
</template>
