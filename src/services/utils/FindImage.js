export const findImage = (pokemon) => {  
  // const src = pokemon.sprites.other.home.front_default;
  const src = pokemon.sprites.front_default

  return src;
};

export const findShiny = (pokemon) => {
  // const src = pokemon.sprites.other.home.front_shiny;
  const src = pokemon.sprites.front_shiny
  
  return src;
}