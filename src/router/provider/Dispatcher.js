export const changeRegion = (region) => ({ 
  type: "changeRegion",
  payload: { region: region },
});

export const changePokemonType = (pokemonType) => ({ 
  type: "changeType",
  payload: { pokemonType: pokemonType } 
});