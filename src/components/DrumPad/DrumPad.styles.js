import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  width: 100px;
  background-color: ${props => (props.isPadActive ? '#ffe66d' : '#82968c')};
  border: 2px solid #60495a;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);

  :active {
    background-color: #ffe66d;
    box-shadow: none;
  }
`;

export const Content = styled.div``;