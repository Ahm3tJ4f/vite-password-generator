/* eslint-disable react/prop-types */
interface Props {
  id: string;
  label: string;
}

const Checkbox: React.FC<Props> = ({ id, label }) => {
  return (
    <div className="space-x-2 text-sm">
      <input type="checkbox" id={id} name={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
