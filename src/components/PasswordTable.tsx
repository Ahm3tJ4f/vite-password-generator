interface Props {
  generatedPassword: string;
}

// eslint-disable-next-line react/prop-types
const PasswordTable: React.FC<Props> = ({ generatedPassword }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(generatedPassword);
  };
  return (
    <div className="contentBox justify-between">
      <span className="text-2xl">
        {generatedPassword ? generatedPassword : "P4S5w0Rd"}
      </span>
      <button onClick={handleClick}>
        <img
          className="filler-green h-7"
          src="copy-regular.svg"
          alt="copy icon"
        />
      </button>
    </div>
  );
};
export default PasswordTable;
