import styled from "styled-components";

export const Wrapper = styled.div`
  
  grid-column: 1/2;
  grid-row: 2/3;
  width: 50px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    transform: rotate(-90deg);
  }
`;

export const RangeSlider = styled.div``;