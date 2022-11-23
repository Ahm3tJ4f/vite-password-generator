import { useState } from "react";
import styled from "styled-components";

const StyledRange = styled.input.attrs({ type: "range" })`
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    border-radius: 5px;

    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      #a4ffaf ${(length / 20) * 100 + "%"},
      white ${(length / 20) * 100 + "%"},
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
        <span className="text-primaryGreen text-3xl">{length}</span>
      </label>

      <StyledRange
        onChange={handleRange}
        type="range"
        name="password-length"
        id="password-length"
        defaultValue={10}
        max={20}
        min={1}
      />
    </form>
  );
};
export default PasswordSettings;
