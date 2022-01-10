export const simpleType = (def, attack) => {
  const double = def.damage_relations.double_damage_from;
  const half = def.damage_relations.half_damage_from;
  const no = def.damage_relations.no_damage_from;

  let multiple = null;
  let classname = "";

  double.map((value) => {
    if (value.name === attack.name) {
      classname = 'double_damage';
      multiple = "x 2";
    }
    return value;
  })
  half.map((value) => {
    if (value.name === attack.name) {
      classname = 'half_damage'
      multiple = "x 1/2";
    }
    return value;
  })
  no.map((value) => {
    if (value.name === attack.name) {
      classname = 'no_damage';
      multiple = "x 0";
    }
    return value;
  })

  if (!multiple) {
    classname = "normal_damage";
    multiple = "";
  }

  return {classname: classname, multiple: multiple};
}