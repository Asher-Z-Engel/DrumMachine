import React from "react";
import { Wrapper, Image } from "./LogoImage.styles";

const LogoImage = ({src, alt, color, isOn}) => (
  <Wrapper color={color} isOn={isOn}>
    <Image src={src} alt={alt} isOn={isOn}/>
  </Wrapper>
);

export default LogoImage;