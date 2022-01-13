export const initialState = {
  // Paramètre
  isNavbarOpen: false,
  wantShiny: false,
  // Fil d'ariane
  filAriane: [],
  // Etat pour les filtres dans le pokedex
  region: {
    name: "kanto",
    offset: 0,
    limit: 151
  },
  pokemonType: ""
}