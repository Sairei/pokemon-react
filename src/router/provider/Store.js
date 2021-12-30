import { createStore } from "redux";
import { initialState } from "./InitialState";

function reducer(state = initialState, action) {
  if (action.type === "isNavbarOpen") {
    return {
      ...state,
      isNavbarOpen: !(state.isNavbarOpen),
    };
  }

  if (action.type === "wantShiny") {
    return {
      ...state,
      wantShiny: !(state.wantShiny),
    };
  }

  if (action.type === "changeRegion") {
    const region = action.payload.region;
    return {
      ...state,
      region: region,
    };
  }
  
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