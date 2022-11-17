interface Props {
  generatedPassword: string;
}
// eslint-disable-next-line react/prop-types
const PasswordTable: React.FC<Props> = ({ generatedPassword }) => {
  return (
    <div className="">
      <span>{generatedPassword ? generatedPassword : "P4S5w0Rd"}</span>
      <button></button>
    </div>
  );
};
export default PasswordTable;
