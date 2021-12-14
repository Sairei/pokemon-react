import React, { useEffect, useState } from "react";

import Loading from '../items/Loading';
import PokemonCard from './PokemonCard';
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

  const [isFilter, setFilter] = useState(false);
  const [filterPokemons, setFilterArray] = useState([]);
  const [allPokemons, setPokemonArray] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await getAllPokemons(regionValue.offset, regionValue.limit, typeValue)
        .then(({ isFilter, filterPokemons, allPokemons, showLoading }) => {
          setFilter(isFilter);
          setFilterArray(filterPokemons);
          setPokemonArray(allPokemons);
          setIsLoading(showLoading);
        });
    }

    fetchData()
  },
    // eslint-disable-next-line
    [regionValue])

  const updateRegion = (name) => {
    setIsLoading(true);
    changeRegion(name);
  }

  const updateType = (name) => {
    changeType(name);
  }

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div className="pokedex_container">
      <HeaderPokedex
        onChangeRegion={updateRegion}
        onChangeType={updateType}
      />

      <div className="pokedex_list_container">
        <div className="list_pokemons">
          <ul>
            { allPokemons.map((poke) => {
              return (
                <li key={ poke.name }>
                  <PokemonCard 
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