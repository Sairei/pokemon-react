export const convertEvolsDetailToString = (detail) => {
  let res = "Inconnu...";

  
  if (detail[0].held_item) {
    if (detail[0].trigger.name === "trade")
      res = "trade with item";
    else if (detail[0].trigger.name === "level-up")
      res = "level up with item";

    res = <>{res}<br/>{"\"" + detail[0].held_item.name + "\""}</>;
  } else if (detail[0].item) {
    res = detail[0].item.name;
  } else if (detail[0].min_happiness) {
    if (detail[0].trigger.name === "trade")
      res = "trade with";
    else if (detail[0].trigger.name === "level-up")
      res = "level up with";

    res = <>{res}<br/>{"happiness at " + detail[0].min_happiness}</>;
  } else if (detail[0].min_level) {
    res = "lvl " + detail[0].min_level;
  } else {
    if (detail[0].trigger.name === "trade")
      res = "trade";
  }

  if (detail[0].time_of_day)
    res = <>{res}<br/>{"at " + detail[0].time_of_day}</>

  return res;
};