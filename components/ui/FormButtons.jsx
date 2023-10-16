import { useRef, useEffect } from "react";

const FormButtons = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  primaryClassName,
  secondaryClassName,
}) => {
  const primaryButtonRef = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        primaryButtonRef.current.click();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={secondaryClassName}
        onClick={onSecondaryClick}
      >
        {secondaryLabel}
      </button>
      <button
        ref={primaryButtonRef}
        type="button"
        className={primaryClassName}
        onClick={onPrimaryClick}
      >
        {primaryLabel}
      </button>
    </>
  );
};

export default FormButtons;
