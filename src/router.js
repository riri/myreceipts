import { createWebHistory, createRouter } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-path',
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { name: '404', path: '/:pathMatch(.*)*', component: () => import('./pages/not-found.vue') },
    { name: 'recipes', path : '/', component: () => import('./pages/recipes.vue') },
    { name: 'about', path: '/about', component: () => import('./pages/about.vue') },
    { name: 'recipe', path: '/recipe/:id', component: () => import('./pages/recipe.vue') },
  ]
})
