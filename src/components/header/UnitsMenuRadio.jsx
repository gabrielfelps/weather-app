import checkmark from '../../assets/images/icon-checkmark.svg';

function UnitsMenuRadio({ name, id, value, onChange, checked, labelName }) {
  return (
    <div>
      <input
        className="sr-only"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />

      <label
        className={`flex gap-2.5 justify-between px-2 py-2.5 hover:cursor-pointer ${checked ? 'bg-neutral-700 rounded-lg' : ''}`}
        htmlFor={id}
      >
        {labelName}
        {checked && <img src={checkmark} alt="" />}
      </label>
    </div>
  );
}

export default UnitsMenuRadio;
