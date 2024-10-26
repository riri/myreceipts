import { createApp } from 'vue'
import router from '@/router'
import { store } from '@/store'
import App from '@/app.vue'
import AppLink from '@/components/app-link.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('AppLink', AppLink)
  .mount('#recipes')
