
let recipes = [
  {
    name: 'First recipe',
    description: 'My super yummy recipe'
  },
  {
    name: 'Second recipe',
    description: 'Another amazing recipe'
  }
]

export default {
  list: (filters) => {
    return recipes
  },
  getByIndex: (index) => {
    return recipes[index]
  }
}
