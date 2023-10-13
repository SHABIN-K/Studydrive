const FormButtons = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  primaryClassName,
  secondaryClassName,
}) => {
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
