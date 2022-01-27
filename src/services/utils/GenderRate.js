import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export const genderRate = (genderRate) => {

  const male =
    <span style={{ color: "red" }}>
      <FontAwesomeIcon icon={faVenus} />
    </span>
  const female =
    <span style={{ color: "blue" }}>
      <FontAwesomeIcon icon={faMars} />
    </span>

  switch (genderRate) {
    case 0:
      return (
        <div>
          <span>100% {female}</span>
          <span> 0% {male}</span>
        </div>
      );
    case 1:
      return (
        <div>
          <span>87.5% {female}</span>
          <span>  12.5% {male}</span>
        </div>
      );
    case 2:
      return (
        <div>
          <span>75% {female}</span>
          <span>  25% {male}</span>
        </div>
      );
    case 3:
      return (
        <div>
          <span>62.5% {female}</span>
          <span>  37.5% {male}</span>
        </div>);
    case 4:
      return (
        <div>
          <span>50% {female}</span>
          <span>  50% {male}</span>
        </div>
      );
    case 5:
      return (
        <div>
          <span>37.5% {female}</span>
          <span>  62.5% {male}</span>
        </div>
      );
    case 6:
      return (
        <div>
          <span>25% {female}</span>
          <span>  75% {male}</span>
        </div>
      );
    case 7:
      return (
        <div>
          <span>12.5% {female}</span>
          <span>  87.5% {male}</span>
        </div>
      );
    case 8:
      return (
        <div>
          <span>0% {female}</span>
          <span>  100% {male}</span>
        </div>
      );
    default:
      return (
        <span>Loading...</span>
      );
  }
}

export const genderMaleRateCalculated = (genderRate) => {
  switch (genderRate) {
    case 0:
      return 100;
    case 1:
      return 87.5;
    case 2:
      return 75;
    case 3:
      return 62.5;
    case 4:
      return 50;
    case 5:
      return 37.5;
    case 6:
      return 25;
    case 7:
      return 12.5;
    case 8:
      return 0;
    default:
      return 0;
  }
}