export const convertGameToColor = (gen) => {
  switch (gen) {
    case "generation-i":
      return "#a8ff98";
    case "generation-ii":
      return "#d6a2e4";
    case "generation-iii":
      return "#dcdcdc";
    case "generation-iv":
      return "#ffb971";
    case "generation-v":
      return "#8cc4e2";
    case "generation-vi":
      return "#ffe662";
    case "generation-vii":
      return "#8cf5e4";
    case "generation-viii":
      return "#da7589";
    default:
      return "gainsboro";
  }
}