import { createApp } from 'vue'
import router from '@/router'
import { store } from '@/store'
import App from '@/app.vue'
import { globalComponents } from '@/components'

createApp(App)
  .use(store)
  .use(router)
  .use(globalComponents)
  .mount('#recipes')
