import React, { useEffect, useState } from "react";

import Loading from '../items/Loading';
import PokedexCard from './PokedexCard';
import { getAllPokemons } from "../../services/scripts/pokemon/getAllPokemon";
import { HeaderPokedex } from "./HeaderPokedex";

const PokedexPage = () => {
  const [regionValue, changeRegion] = useState({
    name: "",
    offset: 0,
    limit: 151
  });
  const [typeValue, changeType] = useState("");
  // const [sortByValue, changeSortBy] = useState("");

  const [allPokemons, setPokemonArray] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMount = true;

    async function fetchData() {
      await getAllPokemons(regionValue.offset, regionValue.limit, typeValue)
        .then(({ allPokemons, showLoading }) => {
          if(isMount) {
            setPokemonArray(allPokemons);
            setIsLoading(showLoading);
          }
        });
    }

    fetchData()

    return () => {isMount = false};
  },
    // eslint-disable-next-line
    [regionValue, typeValue])

  const updateRegion = (name) => {
    setIsLoading(true);
    changeRegion(name);
  }

  const updateType = (name) => {
    setIsLoading(true);
    changeType(name);
  }

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div className="pokedex_container">
      <HeaderPokedex
        onChangeRegion={updateRegion}
        region={regionValue}
        onChangeType={updateType}
        typeValue={typeValue}
      />

      <div className="pokedex_list_container">
        <div className="list_pokemons">
          <ul>
            { allPokemons.map((poke) => {
              return (
                <li key={ poke.name }>
                  <PokedexCard 
                    pokemon={ poke }
                  />
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokedexPage;