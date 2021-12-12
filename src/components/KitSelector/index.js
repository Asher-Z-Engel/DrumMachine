import React from "react";

// Styles
import { Label } from "./KitSelector.styles";

const KitSelector = ({kitName, name }) => {
  return (<Label>
    {kitName}
    <input type="radio" name={name} value={kitName}/>
  </Label>)
}

export default KitSelector;