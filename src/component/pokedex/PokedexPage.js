import React, { useEffect, useState } from "react";

import { getAllPokemons } from "../../services/scripts/pokemon/getAllPokemon";
import { HeaderPokedex } from "./HeaderPokedex";

const PokedexPage = () => {
  const [regionValue, changeRegion] = useState({
    name: "",
    offset: 0,
    limit: 151
  });
  const [typeValue, changeType] = useState("");
  const [sortByValue, changeSortBy] = useState("");

  const [isFilter, setFilter] = useState(false);
  const [filterPokemons, setFilterArray] = useState([]);
  const [allPokemons, setPokemonArray] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await getAllPokemons(regionValue.offset, regionValue.limit, typeValue)
        .then(({ isFilter, filterPokemons, allPokemons, showLoading } ) => {
          setFilter(isFilter);
          setFilterArray(filterPokemons);
          setPokemonArray(allPokemons);
          setIsLoading(showLoading);
        });
    }

    fetchData()
  }, [regionValue])

  const updateRegion = (name) => {
    console.log(name);
  }
  
  const updateType = (name) => {
    console.log(name);
  }

  return (
    <div className="pokedex_container">
      <HeaderPokedex 
        onChangeRegion={updateRegion}
        onChangeType={updateType}
      />
    </div>
  );
}

export default PokedexPage;

// class PokedexPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allPokemons: [],
//       searchPokemons: [],
//       filterPokemons: [],
//       showLoading: true,
//       isFilter: false,
      
//       limit: 151,
//       offset: 0,

//       regions: [],
//       regionValue: "",
//       type: [],
//       typeValue: "",
//       sortBy: [id, name],
//       sortByValue: ""
//     }
//   }
  
// async componentDidMount() {
//   const {isFilter, filterPokemons, allPokemons, showLoading } = await getAllPokemons(this.state.offset, this.state.limit);
//   this.setState({
//     isFilter: isFilter,
//     filterPokemons: filterPokemons,
//     allPokemons: allPokemons,
//     showLoading: showLoading
//   })

//   // Contruction du dropdown de filtre par génération
//   const { generations } = await getAllGeneration();

//   let arr = [];
//   for(let i=0; i < generations.length; i++) {
//     let gen = generations[i];
//     let offset = i===0 ? 0 : arr[i-1].offset + arr[i-1].limit;
//     let limit = gen.pokemon_species.length;
//     arr.push({ name: gen.main_region.name , offset: offset, limit: limit });
//   }
  
//   this.setState({
//     regions: arr
//   })
  
//   // Contruction du dropdown de filtre par type
//   const { types } = await getAllType();

//   arr = ["All types"];
//   for(let i=0; i < types.length; i++) {
//     let t = types[i];
//     arr.push(t.name);
//   }
  
//   this.setState({
//     type: arr
//   })
// }


//   render() {
//     return (
//       <div className="pokedex_container">
//         <HeaderPokedex 
//           />
//       </div>
//     );
//   }
// }

// export default PokedexPage;