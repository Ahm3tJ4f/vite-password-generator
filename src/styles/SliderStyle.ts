import styled from "styled-components";

export const StyledRange = styled.input<any>`
  --thumb-size: 20px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    border-radius: 5px;

    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      #a4ffaf ${(props) => (props.value / 20) * 95 + "%"},
      white ${(props) => (props.value / 20) * 95 + "%"},
      white 100%
    );
  }

  &::-webkit-slider-thumb {
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background: #d9d9d9;
    cursor: pointer;
    margin-top: -5px;
    transition: all 50ms ease-in;
  }

  &:active::-webkit-slider-thumb {
    background: #979797;
  }

  & {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;
