import React, {useRef, useEffect} from "react";
// Styles
import { Wrapper } from "./PowerButton.styles";

const PowerButton = ({ isOn, onClick, loading }) => {
  const button = useRef(null);
  useEffect(() => {
    if (loading) {
      button.current.classList.add('loading');
    } else {
      button.current.classList.remove('loading');
    }
  }, [loading])
  return (
    <>
      <Wrapper isOn={isOn} onClick={onClick} loading={loading} ref={button}>
        <i className="fas fa-power-off"></i>
      </Wrapper>
    </>
  )
}

export default PowerButton;