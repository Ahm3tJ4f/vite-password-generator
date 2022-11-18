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
    <div className="">
      <span>{generatedPassword ? generatedPassword : "P4S5w0Rd"}</span>
      <button onClick={handleClick}>
        <img className="" src="../public/copy-regular.svg" alt="" />
        hi
      </button>
    </div>
  );
};
export default PasswordTable;
