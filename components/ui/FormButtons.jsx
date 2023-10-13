const FormButtons = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  return (
    <>
      <button type="button" className={className} onClick={onSecondaryClick}>
        {secondaryLabel}
      </button>
      <button type="button" className={className} onClick={onPrimaryClick}>
        {primaryLabel}
      </button>
    </>
  );
};

export default FormButtons;
