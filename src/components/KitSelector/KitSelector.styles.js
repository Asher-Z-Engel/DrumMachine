import styled from "styled-components";

export const Label = styled.label`
  width: 102px;
  height: 25px;
  margin: 2px;
  position: relative;
`;

export const RadioButton = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  appearance: none;
  background: ${props => props.color.secondary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  border: 2px solid #454a48;
  color: #454a48;
  cursor: pointer;

  &::after {
    content: "${props => props.value}";
    font-size: 16px;
    font-weight: 700;
  }

  &:checked {
    text-shadow: 2px 2px 15px ${props => props.color.default};
    border: 2px solid ${props => props.color.default};
    box-shadow: 0 0 20px ${props => props.color.default};
    background: ${props => props.color.default};
  }

  &:disabled {
    background: #6a706e;
    border: 2px solid #454a48;
    box-shadow: none;
    color: #454a48;
    text-shadow: none;
    cursor: auto;
  }
`;