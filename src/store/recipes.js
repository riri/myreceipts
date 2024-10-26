
let recipes = [
  {
    // meta
    "@context": "https://schema.org",
    "@type": "Recipe",
    // Thing
    "name": "Pâtes à la Carbonara",
    "description": "Les classiques pâtes à la carbonara venues d'Italie",
    "identifier": "pates-a-la-carbonara", // slug
    "image": "img/carbonara.jpg",
    // Howto
    "totalTime": "PT35M", // computed from prepTime+cookTime ?
    "estimatedCost": "€€",
    // CreativeWork
    "author": "Richard Gill",
    "datePublished": "2024-10-26",
    "thumbnailURL": "thumbs/carbonara.jpg",
    "educationalLevel": "facile",
    "keywords": [
      "chaud",
      "classique",
      "salé",
    ],
    // Recipe
    "recipeYeild": "4 personnes",
    "recipeCategory": "Plat",
    "recipeCuisine": "Italie",
    "prepTime": "PT15M",
    "cookTime": "PT20M",
    "recipeIngredient": [
      "400g de pâtes",
      "3 oeufs",
      "3 jaunes d'oeufs",
      "150g de guanciale (pancetta ou lardons)",
      "120g de pecorino ou parmesan",
      "sel, poivre"
    ],
    "recipeInstructions": [
      "Couper le guanciale (pancetta ou lard) en lardons. Les mettre dans une poêle et les faire cuire à feu moyen/doux durant quelques minutes. Le gras doit fondre et les lardons doivent légèrement croustiller. Réserver.",
      "Faire cuire les pâtes dans un grand volume d'eau légèrement salée conformément aux instructions du paquet.",
      "Pendant ce temps, battre les œufs (entiers + les jaunes d'oeufs) dans un grand récipient et ajouter 2/3 du pecorino ou parmesan râpé. Saler légèrement et poivrer.",
      "Égoutter les pâtes en conservant 2 à 3 CS d'eau de cuisson dans un petit récipient (ça servira à rendre la sauce plus fluide par la suite au besoin). Disposer les pâtes dans le récipient dans lequel vous avez mis les œufs puis mélanger le tout rapidement jusqu'à ce que les pâtes soient bien enrobées de sauce. Si la sauce n'est pas assez fluide, ajoutez progressivement, 1 CS après l'autre, un peu d'eau de cuisson des pâtes jusqu'à obtention de la consistance souhaitée.",
      "Ajouter ensuite les lardons de guanciale (pancetta ou lard), un peu de pecorino râpé et rectifier l'assaisonnement en sel mais surtout en poivre (vous pouvez y aller, c'est le secret de la réussite). Servir aussitôt"
    ]
  },
  {
    name: 'First recipe',
    identifier: "first-recipe",
    description: 'My super yummy recipe'
  },
  {
    name: 'Second recipe',
    identifier: "second-recipe",
    description: 'Another amazing recipe'
  }
]

export default {
  list: (filters) => {
    return recipes
  },
  byIndex: (index) => {
    return recipes[index]
  },
  byId: (slug) => {
    return recipes.find((recipe) => recipe.identifier === slug);
  }
}
