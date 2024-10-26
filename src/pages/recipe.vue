<script setup>
import { useRecipesStore } from '@/store'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const recipes = useRecipesStore()
const recipe = recipes.byId(route.params.id)

onBeforeRouteUpdate(async (to, from) => {
  // react to route change
})
</script>

<template>
  <article>
    <header>
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>
      <dl>
        <dt v-if="recipe.educationalLevel">Difficulté</dt>
        <dd v-if="recipe.educationalLevel">{{ recipe.educationalLevel }}</dd>
        <dt>Temps de préparation</dt>
        <dd>{{ recipe.prepTime }}</dd>
        <dt>Temps de cuisson</dt>
        <dd>{{ recipe.cookTime }}</dd>
      </dl>
      <ul>
        <li class="category">{{ recipe.recipeCategory }}</li>
        <li class="cuisine">{{ recipe.recipeCuisine }}</li>
        <li v-for="tag in recipe.keywords">{{ tag }}</li>
      </ul>
    </header>
    <section class="ingredients">
      <h3>Ingrédients</h3>
      <ul>
        <li v-for="ingredient in recipe.recipeIngredient">{{ ingredient }}</li>
      </ul>
    </section>
    <section class="intructions">
      <h3>Préparation</h3>
      <ul>
        <li class="step" v-for="(instruction, index) in recipe.recipeInstructions">
          <h4>Etape {{ index+1 }}</h4>
          <p>{{ instruction }}</p>
        </li>
      </ul>
    </section>
  </article>
</template>
