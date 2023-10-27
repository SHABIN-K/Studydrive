const Stepper = ({ steps, activeStep }) => {
  return (
    <ol className="flex items-center py-1 space-x-2 sm:space-x-4 text-sm sm:text-base font-medium text-center text-gray-400">
      {steps.map((step, index) => {
        const isCompleted = index <= activeStep;
        return (
          <li
            key={index}
            className={`flex items-center ${
              isCompleted ? "text-green-400" : "text-gray-400"
            }`}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0 ${
                isCompleted ? "border-green-400 " : "border-gray-400"
              }`}
            >
              {index + 1}
            </span>
            {step}
            <svg
              className={`w-3 h-3 ml-2 sm:ml-4 ${2 === index && "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
