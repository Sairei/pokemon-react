import React, { useEffect, useState } from "react";

import Loading from '../items/Loading';
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
    changeRegion(name);
  }

  const updateType = (name) => {
    changeType(name);
  }

  if (isLoading) {
    return (<Loading />)
  }

  console.log(allPokemons);

  return (
    <div className="pokedex_container">
      <HeaderPokedex
        onChangeRegion={updateRegion}
        onChangeType={updateType}
      />

      <div className="pokedex_container">
        <div className="list_pokemons">
          <ul>
            {allPokemons.map((poke) => {
              return (
                <li>
                  {poke.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokedexPage;