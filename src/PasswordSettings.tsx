import { useState } from "react";

const PasswordSettings = () => {
  const [length, setLength] = useState(10);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <form className="contentBox flex flex-col space-y-8">
      <label
        className="flex justify-between items-center"
        htmlFor="password-length "
      >
        <span className="text-xl ">Character Length</span>
        <span className="text-primaryGreen text-3xl">{length}</span>
      </label>

      <input
        className="slider"
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
