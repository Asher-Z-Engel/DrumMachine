import styled from "styled-components";

export const Wrapper = styled.div`
width: 650px;
height: 400px;
background-color: #82968C;
border:5px solid #E87461;
border-radius: 20px;
margin: auto;
display: grid;
grid-template-columns: 1fr 320px 1.5fr;
grid-template-rows: 1fr 2fr;
opacity: ${props => props.loading || !props.isOn ? '.7' : '1'}
`;