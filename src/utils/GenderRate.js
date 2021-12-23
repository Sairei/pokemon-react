
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export const genderRate = (genderRate) => {

  console.log(genderRate);

  switch (genderRate) {
    case 0:
      return (
        <div>
          <span>100% <FontAwesomeIcon icon={faVenus} /></span>
          <span> 0% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 1:
      return (
        <div>
          <span>87.5% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  12.5% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 2:
      return (
        <div>
          <span>75% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  25% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 3:
      return (
        <div>
          <span>62.5% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  37.5% <FontAwesomeIcon icon={faMars} /></span>
        </div>);
    case 4:
      return (
        <div>
          <span>50% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  50% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 5:
      return (
        <div>
          <span>37.5% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  62.5% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 6:
      return (
        <div>
          <span>25% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  75% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 7:
      return (
        <div>
          <span>12.5% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  87.5% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    case 8:
      return (
        <div>
          <span>0% <FontAwesomeIcon icon={faVenus} /></span>
          <span>  100% <FontAwesomeIcon icon={faMars} /></span>
        </div>
      );
    default:
      return (
        <span>Loading...</span>
      );
  }
}