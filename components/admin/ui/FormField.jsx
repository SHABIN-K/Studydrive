const FormField = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <>
      <label className="text-gray-900 text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
      />
    </>
  );
};

export default FormField;
