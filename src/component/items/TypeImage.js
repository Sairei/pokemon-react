import React from "react";

import { Image } from "@mantine/core";

const TypeImage = ({ typeName }) => {
  return (
    <Image src={require(`../../assets/images/type/${typeName}.png`)} alt={typeName} />
  );
}

export default TypeImage;