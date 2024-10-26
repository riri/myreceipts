import AppLink from './app-link.vue'

export const globalComponents = {
  install: (app, options) => {
    app.component('AppLink', AppLink)
  }
}
