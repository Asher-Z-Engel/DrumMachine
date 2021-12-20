import styled from "styled-components";

export const Wrapper = styled.div`
  
  grid-column: 1/2;
  grid-row: 2/4;
  width: 50px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RangeSlider = styled.input`
  transform: rotate(-90deg);
  -webkit-appearance: none;
  background: transparent;
  width: 250px;

  &:disabled {
    &::-webkit-slider-thumb,
    ::-webkit-slider-runnable-track {
      cursor: default;
    }
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -14px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &::-moz-range-thumb {

  }

  &::-ms-thumb {

  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #367edb;
  }

  &::-moz-range-track {

  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &:focus::-ms-fill-lower {
    background: #3071a9;
  }

  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &:focus::-ms-fill-upper {
    background: #367edb;
  }
`;