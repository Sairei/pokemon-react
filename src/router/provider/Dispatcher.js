/** Paramètres **/
export const isNavbarOpen = () => ({ 
  type: "isNavbarOpen"
});

export const wantShiny = () => ({ 
  type: "wantShiny"
});


/** Filtres dans le pokedex **/
export const changeRegion = (region) => ({ 
  type: "changeRegion",
  payload: { region: region },
});

export const changePokemonType = (pokemonType) => ({ 
  type: "changeType",
  payload: { pokemonType: pokemonType } 
});