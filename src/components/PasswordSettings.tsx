import { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
const StyledRange = styled.input<any>`
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
`;

const PasswordSettings = () => {
  const [length, setLength] = useState(10);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <form className="contentBox flex flex-col space-y-8">
      <label
        className="flex justify-between items-center"
        htmlFor="password-length"
      >
        <span className=" ">Character Length</span>
        <span className="text-primaryGreen text-2xl">{length}</span>
      </label>

      <StyledRange
        onChange={handleRange}
        type="range"
        name="password-length"
        id="password-length"
        value={length}
        max={20}
        min={1}
      />
      <div className="flex flex-col items-start space-y-5">
        <Checkbox id="uppercase" label="Include Uppercase Letters" />
        <Checkbox id="lowercase" label="Include Lowercase Letters" />
        <Checkbox id="numbers" label="Include Numbers" />
        <Checkbox id="symbols" label="Include Symbols" />
      </div>
    </form>
  );
};
export default PasswordSettings;
