export const convertEvolsDetailToString = (detail) => {
  let res = "";
  
  if(detail[0].min_level) 
    res = "lvl " + detail[0].min_level;
  else
    res = "Inconnu...";

  return res;
};