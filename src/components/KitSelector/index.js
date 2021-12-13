import React from "react";

// Styles
import { Label, RadioButton } from "./KitSelector.styles";

const KitSelector = ({ kitName, name, isOn, color }) => {
  return (<Label  color={color}>
    
    <RadioButton type="radio" name={name} value={kitName} disabled={!isOn} color={color}/>
  </Label>)
}

export default KitSelector;