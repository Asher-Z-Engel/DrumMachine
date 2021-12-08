import React from "react";
// Styles
import { Wrapper, RangeSlider } from "./Slider.styles";

const Slider = ({onChange}) => {
  return (<Wrapper>
    <RangeSlider>
      <input type="range" min="0" max="1" step="0.1" defaultValue=".5" onChange={onChange}/>
    </RangeSlider>
  </Wrapper>)
}

export default Slider;