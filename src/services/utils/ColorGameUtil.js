export const convertGameToColor = (gen) => {
  switch (gen) {
    case "red":
      return {
        text: '',
        background: '#FF1111',
      };
    case "blue":
      return {
        text: 'white',
        background: '#1111FF',
      };
    case "yellow":
      return {
        text: '',
        background: '#FFD733',
      };
    case "crystal":
      return {
        text: '',
        background: '#4FD9FF',
      };
    case "gold":
      return {
        text: '',
        background: '#DAA520',
      };
    case "silver":
      return {
        text: '',
        background: '#C0C0C0',
      };
    case "emerald":
      return {
        text: 'white',
        background: '#00A000',
      };
    case "firered":
      return {
        text: '',
        background: '#FF7327',
      };
    case "leafgreen":
      return {
        text: '',
        background: '#00DD00',
      };
    case "ruby":
      return {
        text: 'white',
        background: '#A00000',
      };
    case "sapphire":
      return {
        text: 'white',
        background: '#0000A0',
      };
    case "diamond":
      return {
        text: '',
        background: '#AAAAFF',
      };
    case "pearl":
      return {
        text: '',
        background: '#FFAAAA',
      };
    case "heartgold":
      return {
        text: '',
        background: '#B69E00',
      };
    case "soulsilver":
      return {
        text: '',
        background: '#C0C0E1',
      };
    case "platinum":
      return {
        text: '',
        background: '#999999',
      };
    case "black":
      return {
        text: 'white',
        background: '#444444',
      };
    case "white":
      return {
        text: '',
        background: '#E1E1E1',
      };
    case "black-2":
      return {
        text: 'white',
        background: '#424B50',
      };
    case "white-2":
      return {
        text: '',
        background: '#E3CED0',
      };
    case "omegaruby":
    case "omega-ruby":
      return {
        text: 'white',
        background: '#AB2813',
      };
    case "alphasapphire":
    case "alpha-sapphire":
      return {
        text: 'white',
        background: '#26649C',
      };
    case "x":
      return {
        text: 'white',
        background: '#025DA6',
      };
    case "y":
      return {
        text: '',
        background: '#EA1A3E',
      };
    case "sun":
      return {
        text: '',
        background: '#F1912B',
      };
    case "moon":
      return {
        text: '',
        background: '#5599CA',
      };
    case "ultra-sun":
      return {
        text: '',
        background: '#E95B2B',
      };
    case "ultra-moon":
      return {
        text: '',
        background: '#226DB5',
      };
    case "lets-go-pikachu":
      return {
        text: '',
        background: '#F5DA26',
      };
    case "lets-go-eevee":
      return {
        text: '',
        background: '#D4924B',
      };
    case "sword":
      return {
        text: '',
        background: '#00A1E9',
      };
    case "shield":
      return {
        text: '',
        background: '#BF004F',
      };
    case "icons":
      return {
        text: '',
        background: '#11BB11',
      };
    default:
      return {
        text: '',
        background: '',
      };
  }
}