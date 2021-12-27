export const convertEvolsDetailToString = (detail) => {
  let res = "Inconnu...";

  // Objet à donner
  if (detail[0].item) {
    res = "give " + detail[0].item.name;
  }
  // Niveau à atteindre
  else if (detail[0].min_level) {
    res = "lvl " + detail[0].min_level;
  }
  // Autre méthode
  else {
    if (detail[0].trigger.name === "trade")
      res = "trade";
    else if (detail[0].trigger.name === "level-up")
      res = "level up";

    let isCondition = false;
    // Objet pour à porter avant de faire quelque chose (lvl_up ou echange)
    if (detail[0].held_item) {
      res = <>{res}{isCondition ? " and" : " with"}<br />{"\"" + detail[0].held_item.name + "\""}</>;
      isCondition = true;
    }
    // Joie minimum à avoir avant de faire quelque chose (lvl_up ou echange)
    if (detail[0].min_happiness) {
      res = <>{res}{isCondition ? " and" : " with"}<br />{"happiness at " + detail[0].min_happiness}</>;
      isCondition = true;
    }
    // Affection minimale à avoir avant de faire quelque chose (lvl_up ou echange)
    if (detail[0].min_affection) {
      res = <>{res}{isCondition ? " and" : " with"}<br />{"affection at " + detail[0].min_affection}</>;
      isCondition = true;
    }
    // Compétence d'un certain type à connaitre
    if (detail[0].known_move_type) {
      res = <>{res}{isCondition ? " and" : " with"}<br />{"when know type's move \"" + detail[0].known_move_type.name + "\""}</>;
      isCondition = true;
    }
    // Localisation particuliere
    if (detail[0].location) {
      res = <>{res}{isCondition ? " and" : " with"}<br />{"in particular location"}</>;
    }
  }

  if (detail[0].time_of_day)
    res = <>{res}<br />{"at " + detail[0].time_of_day}</>

  return res;
};