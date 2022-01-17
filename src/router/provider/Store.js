import { createStore } from "redux";
import { initialState } from "./InitialState";

function reducer(state = initialState, action) {
  /** Paramètrage **/
  // Gestion de l'aouverture de la navigation
  if (action.type === "isNavbarOpen") {
    return {
      ...state,
      isNavbarOpen: !(state.isNavbarOpen),
    };
  }

  // Gestion de l'état shiny des pokemons
  if (action.type === "wantShiny") {
    return {
      ...state,
      wantShiny: !(state.wantShiny),
    };
  }

  /** Filtres dans le pokedex **/
  // Changement de la region 
  if (action.type === "changeRegion") {
    const region = action.payload.region;
    return {
      ...state,
      region: region,
    };
  }
  
  // Changement du filtre sur les types
  if (action.type === "changeType") {
    const pokemonType = action.payload.pokemonType;
    return {
      ...state,
      pokemonType: pokemonType,
    };
  }

  return state;
}


export const store = createStore(reducer);