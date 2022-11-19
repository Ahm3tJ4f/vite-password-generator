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
      <span className="text-3xl">
        {generatedPassword ? generatedPassword : "P4S5w0Rd"}
      </span>
      <button onClick={handleClick}>
        <img
          className="h-7 filler-green"
          src="copy-regular.svg"
          alt="copy icon"
        />
      </button>
    </div>
  );
};
export default PasswordTable;
