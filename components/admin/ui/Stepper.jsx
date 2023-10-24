

const Stepper = ({ steps, currentStep, onStepChange }) => {
  const style = {
    common_span:
      "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400",
  };
  return (
    <ol class="flex items-center py-1 space-x-2 sm:space-x-4 text-sm sm:text-base font-medium text-center text-gray-400">
      <li class="flex items-center text-green-400">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-green-400 rounded-full shrink-0">
          1
        </span>
        UPLOAD
        <svg
          class="w-3 h-3 ml-2 sm:ml-4"

          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li class="flex items-center">
        <span class={`${style.common_span}`}>2</span>
        DETAILS
        <svg
          class="w-3 h-3 ml-2 sm:ml-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li class="flex items-center">
        <span class={`${style.common_span}`}>3</span>
        DONE
      </li>
    </ol>
  );
};

export default Stepper;
