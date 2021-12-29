export const findImage = (pokemon) => {
  // const src = pokemon.sprites.other.dream_world.front_default
  //   ? pokemon.sprites.other.dream_world.front_default
  //   : pokemon.sprites.other['official-artwork'].front_default;
  
  const src = pokemon.sprites.other.home.front_default;
  
  return src;
};

export const findShiny = (pokemon) => {
  const src = pokemon.sprites.other.home.front_shiny;
  
  return src;
}