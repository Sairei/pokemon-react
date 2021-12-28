export const findImage = (pokemon) => {
  const src = pokemon.sprites.other.dream_world.front_default
    ? pokemon.sprites.other.dream_world.front_default
    : pokemon.sprites.other['official-artwork'].front_default;
  
  return src;
};