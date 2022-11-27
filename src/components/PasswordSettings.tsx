import { useState } from "react";
import Checkbox from "./Checkbox";
import { StyledRange } from "../styles/SliderStyle";
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
