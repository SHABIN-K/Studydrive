const DocDetails = ({ files }) => {
  return (
    <div>
      {files.length > 0 && (
        <div className="mt-3 w-full">
          <ul>
            {files.map((file, index) => (
              <li key={index} className="text-white text-sm font-bold mt-1">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocDetails;
