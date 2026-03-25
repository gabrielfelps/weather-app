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

      <label className="flex px-2 py-2.5" htmlFor={id}>
        {labelName}
      </label>
    </div>
  );
}

export default UnitsMenuRadio;
