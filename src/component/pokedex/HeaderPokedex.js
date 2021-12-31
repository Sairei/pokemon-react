import React, { useEffect, useState } from "react";

import { NativeSelect, TextInput } from "@mantine/core";

import { getAllGeneration } from "../../services/scripts/generation/getAllGeneration";
import { getAllType } from "../../services/scripts/type/getAllType";

export const HeaderPokedex = (props) => {
  const [regions, setRegions] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    let isMount = true;

    async function fetchData() {
      // Contruction du dropdown de filtre par génération
      await getAllGeneration()
        .then((items) => {
          let arr = [];
          for(let i=0; i < items.generations.length; i++) {
            let gen = items.generations[i];
            let offset = i===0 ? 0 : arr[i-1].offset + arr[i-1].limit;
            let limit = gen.pokemon_species.length;
            arr.push({ name: gen.main_region.name , offset: offset, limit: limit });
          }
      
          if(isMount)
            setRegions(arr)
        });

    
      // Contruction du dropdown de filtre par type
      await getAllType()
        .then((items) => {
          let arr = [{ label: "-----", value: "" }];
          for(let i=0; i < items.types.length; i++) {
            let t = items.types[i];
            arr.push({ label: t.name, value: t.name });
          }
          arr.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0))
          
          if(isMount)
            setTypes(arr);
        })
    };

    fetchData();

    return () => {isMount = false};
  }, [])

  return (
    <div className="header_pokedex">
      <div className="filter_container">
        <ul>

          <li>
            <NativeSelect 
              label="Region"
              onChange={(v) => props.onChangeRegion(
                // eslint-disable-next-line
                regions.find(function(post, index) {
                  if(post.name === v.currentTarget.value)
                      return true;
                  })
                )}
              value={props.region.name}
              data={regions.map((v) => {
                return {value: v.name, label: v.name}
              })}
            />
          </li>
        
          <li>
            <NativeSelect 
              label="Type"
              onChange={(v) => props.onChangeType(v.currentTarget.value)}
              value={props.typeValue}
              data={types}
            />
          </li>

          <li>
            <NativeSelect 
              label="Sort by..."
              disabled
              data={[
                {value: "ID", label: "ID"},
                {value: "Name", label: "Name"}
              ]}
            />
          </li>
          
          <li>
            <TextInput 
              label="Search" 
              defaultValue={props.searchValue}
              onChange={(event) => props.onSearch(event)}/>
          </li>
        </ul>
      </div>
    </div>
  )
}