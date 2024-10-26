
// array of DefinedTermSet
let tags = [
  {
    // meta
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    // DefinedTerm
    "termCode": "chaud",
    "name": "Plat chaud",
  },
  {
    // meta
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    // DefinedTerm
    "termCode": "classique",
    "name": "Les classiques",
  },
  {
    // meta
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    // DefinedTerm
    "termCode": "salé",
    "name": "Plat salé",
  }
]

export default {
  list: (filters) => {
    return tags
  },
  get: (tag) => {
    return tags[tag]
  }
}
