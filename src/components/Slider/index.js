import React from "react";
// Styles
import { Wrapper, RangeSlider } from "./Slider.styles";

const Slider = ({onChange, isOn }) => {
  return (
    <Wrapper>
      <RangeSlider type="range" min="0" max="1" step="0.01" defaultValue=".5" onChange={onChange} disabled={!isOn}/>
    </Wrapper>
  )
}

export default Slider;