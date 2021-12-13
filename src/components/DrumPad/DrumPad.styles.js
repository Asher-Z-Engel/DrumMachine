import styled from "styled-components";

export const Button = styled.fieldset`
  height: 80px;
  width: 100px;
  background-color: ${props => (props.isActive ? '#ffe66d' : '#82968c')};
  border: 2px solid #60495a;
  border-radius: 10px;
  box-shadow: ${props => (props.isActive ? 'none' : `3px 3px 5px 1px rgba(0,0,0,0.5), inset 0 0 10px 10px ${props.color.default}`)};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${props => (props.isOn ? 'auto' : 'none')};
  cursor: pointer;
  font-weight: 300;
  font-size: 30px;
  text-shadow: ${props => (props.isActive ? 'none' : '3px 3px 5px rgba(0,0,0,0.5)')};
  
  opacity: ${props => (props.isActive ? ".8" : "1")};

  &:disabled {
    text-shadow: none;
    box-shadow: none;
  }
`;


