import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export const convertSpeciesToName = (name, speciesName) => {
  var namePokemon = "";
  if(name.endsWith("-m")) {
    namePokemon = <> { speciesName.substring(0, speciesName.length-2) } <FontAwesomeIcon icon={faMars} /> </>
  }
  else if(name.endsWith("-f")) {
    namePokemon = <> { speciesName.substring(0, speciesName.length-2) } <FontAwesomeIcon icon={faVenus} />  </>
  }
  else {
    namePokemon = speciesName
  }

  return namePokemon;
};