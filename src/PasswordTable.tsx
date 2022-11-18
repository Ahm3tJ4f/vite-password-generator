interface Props {
  generatedPassword: string;
}
// eslint-disable-next-line react/prop-types
const PasswordTable: React.FC<Props> = ({ generatedPassword }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(generatedPassword);
    console.log("copied");
  };
  return (
    <div className="flex rounded-2xl w-[35rem] justify-between bg-[#2B2A33] px-8 py-7  ">
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
