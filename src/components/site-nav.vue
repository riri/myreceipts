<template>
  <header>
    <nav>
      <ul>
        <li><app-link v-bind="$attrs" :to="{ name: 'recipes' }">Go to home</app-link></li>
        <li><app-link v-bind="$attrs" :to="{ name: 'about' }">About page</app-link></li>
        <li><app-link v-bind="$attrs" to="https://vite.dev">Vite</app-link></li>
        <li><app-link v-bind="$attrs" to="https://vuejs.org">Vue</app-link></li>
      </ul>
    </nav>
  </header>
</template>
