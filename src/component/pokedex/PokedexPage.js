import React from "react";

import { id, name } from "../../lang/en/sortBy";
import { getAllPokemons } from "../../services/scripts/pokemon/getAllPokemon";
import { getAllGeneration } from "../../services/scripts/generation/getAllGeneration";
import { getAllType } from "../../services/scripts/type/getAllType";
import { HeaderPokedex } from "./HeaderPokedex";

class PokedexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemons: [],
      searchPokemons: [],
      filterPokemons: [],
      showLoading: true,
      isFilter: false,
      
      limit: 151,
      offset: 0,

      regions: [],
      type: [],
      sortBy: [id, name]
    }
  }

  
  async componentDidMount() {
    const {isFilter, filterPokemons, allPokemons, showLoading } = await getAllPokemons(this.state.offset, this.state.limit);
    this.setState({
      isFilter: isFilter,
      filterPokemons: filterPokemons,
      allPokemons: allPokemons,
      showLoading: showLoading
    })

    // Contruction du dropdown de filtre par génération
    const { generations } = await getAllGeneration();

    let arr = [];
    for(let i=0; i < generations.length; i++) {
      let gen = generations[i];
      let offset = i===0 ? 0 : arr[i-1].offset + arr[i-1].limit;
      let limit = gen.pokemon_species.length;
      arr.push({ name: gen.main_region.name , offset: offset, limit: limit });
    }
    
    this.setState({
      regions: arr
    })
    
    // Contruction du dropdown de filtre par type
    const { types } = await getAllType();

    arr = ["All types"];
    for(let i=0; i < types.length; i++) {
      let t = types[i];
      arr.push(t.name);
    }
    
    this.setState({
      type: arr
    })
  }


  render() {
    return (
      <div className="pokedex_container">
        <HeaderPokedex 
          />
      </div>
    );
  }
}

export default PokedexPage;