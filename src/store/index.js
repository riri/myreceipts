import recipes from "./recipes"
import tags from "./tags"
import { createPinia } from "pinia"

export const store = createPinia()

export const useRecipesStore = () => { return recipes }

export default {
  recipes,
  tags
}
