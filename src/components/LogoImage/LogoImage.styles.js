import styled from "styled-components";

export const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: ${props => (props.isOn ? `inset 0 0 20px 10px ${props.color.default}, 0 0 20px 10px${props.color.default}` : 'inset 0 0 10px #454a48, 0 0 10px #454a48')};
  margin: 15px auto;
  grid-column: 3 / 4;
  grid-row: 1/3;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  filter: blur(${props => (props.isOn ? '' : '2px')});

`;