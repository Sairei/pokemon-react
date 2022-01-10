export const simpleType = (def, attack) => {
  const double = attack.damage_relations.double_damage_to;
  const half = attack.damage_relations.half_damage_to;
  const no = attack.damage_relations.no_damage_to;

  let multiple = null;
  let classname = "";

  double.map((value) => {
    if (value.name === def.name) {
      classname = 'double_damage';
      multiple = "x 2";
    }
    return value;
  })
  half.map((value) => {
    if (value.name === def.name) {
      classname = 'half_damage'
      multiple = "x 1/2";
    }
    return value;
  })
  no.map((value) => {
    if (value.name === def.name) {
      classname = 'no_damage';
      multiple = "x 0";
    }
    return value;
  })

  if (!multiple) {
    classname = "normal_damage";
    multiple = "";
  }

  return { classname: classname, multiple: multiple };
}


export const doubleType = (def1, def2, attack) => {
  const double = attack.damage_relations.double_damage_to;
  const half = attack.damage_relations.half_damage_to;
  const no = attack.damage_relations.no_damage_to;

  let multiple = null;
  let tmp1 = 1;
  let tmp2 = 1;
  let classname = "";

  double.map((value) => {
    if (value.name === def1.name) {
      tmp1 = 2;
    }
    if (value.name === def2.name) {
      tmp2 = 2;
    }
    return value;
  })
  half.map((value) => {
    if (value.name === def1.name) {
      tmp1 = 1 / 2;
    }
    if (value.name === def2.name) {
      tmp2 = 1 / 2;
    }
    return value;
  })
  no.map((value) => {
    if (value.name === def1.name) {
      tmp1 = 0;
    }
    if (value.name === def2.name) {
      tmp2 = 0;
    }
    return value;
  })

  let mult = tmp1 * tmp2;
  if (mult === 0) {
    classname = 'no_damage';
    multiple = "x 0";
  }
  else if (mult === 0.25) {
    classname = 'quarter_damage'
    multiple = "x 1/4";
  }
  else if (mult === 0.5) {
    classname = 'half_damage'
    multiple = "x 1/2";
  }
  else if (mult === 1) {
    classname = "normal_damage";
    multiple = "";
  }
  else if (mult === 2) {
    classname = "double_damage";
    multiple = "x 2";
  }
  else if (mult === 4) {
    classname = "quadruple_damage";
    multiple = "x 4";
  }

  return { classname: classname, multiple: multiple };
}