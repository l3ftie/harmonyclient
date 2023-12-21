const FormTextArea = ({ label, name, value, handleChange }) => {
  return (
    <div className={`my-4`}>
      {label && (
        <span className="pl-3 text-sm font-semibold text-accent">{label}</span>
      )}
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className={`w-full border-2 border-blue-100  rounded-lg p-2`}
      />
    </div>
  );
};

export default FormTextArea;
