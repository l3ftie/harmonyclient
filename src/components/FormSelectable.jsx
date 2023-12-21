const FormSelectable = ({
  label,
  name,
  type,
  value,
  handleChange,
  defaultOption,
  selectedOption,
  options,
}) => {
  return (
    <div className={`my-4 flex flex-col items-start`}>
      {label && (
        <span className="pl-3 text-sm font-semibold text-accent">{label}</span>
      )}
      <div className="bg-white flex gap-1 rounded-full p-1 font-semibold">
        {options.map((opt) => {
          const { title } = opt;
          return (
            <label
              className={`${
                selectedOption === title
                  ? "bg-accent text-blue-50 p-2 rounded-full"
                  : "p-2 bg-slate-100 rounded-full"
              }`}
              key={title}
            >
              <input
                hidden
                type="radio"
                value={title}
                checked={selectedOption === title}
                onChange={handleChange}
              />
              {title}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FormSelectable;
