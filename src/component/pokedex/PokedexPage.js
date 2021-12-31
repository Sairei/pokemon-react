import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { changeFil, changePokemonType, changeRegion } from "../../router/provider/Dispatcher";
import { getAllPokemons } from "../../services/scripts/pokemon/getAllPokemon";
import Loading from '../items/Loading';
import { HeaderPokedex } from "./HeaderPokedex";
import PokedexCard from './PokedexCard';

const PokedexPage = () => {
  const dispatch = useDispatch();

  const regionValue = useSelector((state) => state.region);
  const typeValue = useSelector((state) => state.pokemonType);

  const [allPokemons, setPokemonArray] = useState([]);
  const [searchPokemons, setSearchPokemonArray] = useState(null);
  const [searchValue, setSearchValue] = useState("");

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

    if (isMount) {
      const pokedexLink = {
        name: "Pokedex",
        link: "/pokedex"
      }
      dispatch(changeFil([pokedexLink]));
    }

    return () => {isMount = false};
  },
    // eslint-disable-next-line
    [regionValue, typeValue])


  const updateRegion = (region) => {
    setIsLoading(true);
    dispatch(changeRegion(region))
    changeRegion(region);
  }

  const updateType = (name) => {
    setIsLoading(true);
    dispatch(changePokemonType(name))
  }

  const handleSearchValue = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    let searchArr = allPokemons.filter(pokemon => {
      return (pokemon.name.includes(value.toLowerCase()) || pokemon.id.toString().includes(value))
    })

    searchArr.length === 0 ?
      setSearchPokemonArray(null) : setSearchPokemonArray(searchArr);
  }


  if (isLoading) {
    return (<Loading />)
  }

  const pokemonArr = searchPokemons === null ? allPokemons : searchPokemons;

  return (
    <div className="pokedex_container">
      <HeaderPokedex
        onChangeRegion={updateRegion}
        region={regionValue}
        onChangeType={updateType}
        typeValue={typeValue}
        onSearch={handleSearchValue}
        searchValue={searchValue}
      />

      <div className="pokedex_list_container">
        <div className="list_pokemons">
          <ul>
            { pokemonArr.map((poke) => {
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