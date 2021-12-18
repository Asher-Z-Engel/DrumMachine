import styled from "styled-components";

export const Wrapper = styled.div`
width: 50px;
height: 50px;
margin: 30px auto 10px;
border-radius: 50%;
background-color: ${props => (props.isOn ? '#0ae7ff' : '#6a706e')};
border: 2px solid ${props => (props.isOn ? '#0ae7ff' : '#454a48')};
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
color: ${props => (props.isOn ? '#00a5b8' : '#454a48')};
box-shadow: ${props => (props.isOn ? '0 0 20px #47edff' : 'none')};

&.loading {
  border: 5px solid #eee;
  border-top: 5px solid #353535;
  animation: spin .8s linear infinite;
  background: #6a706e;
  box-shadow: none;
  cursor: default;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & i {
    display: none;
  }
}
`;
