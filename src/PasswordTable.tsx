import styled from "styled-components";
interface Props {
  generatedPassword: string;
}

const ContentBox = styled.div`
  display: flex;
  border-radius: 1rem;
  justify-content: space-between;
  width: 35rem;
  background-color: #2b2a33;
  padding: 1.75rem 2rem;
`;

const Password = styled.span`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
`;

const CopyButton = styled.img`
  height: 1.75rem;
  filter: invert(89%) sepia(12%) saturate(1160%) hue-rotate(66deg)
    brightness(102%) contrast(102%);
`;
// eslint-disable-next-line react/prop-types
const PasswordTable: React.FC<Props> = ({ generatedPassword }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(generatedPassword);
  };
  return (
    <ContentBox>
      <Password>{generatedPassword ? generatedPassword : "P4S5w0Rd"}</Password>
      <button onClick={handleClick}>
        <CopyButton src="copy-regular.svg" alt="copy icon" />
      </button>
    </ContentBox>
  );
};
export default PasswordTable;
