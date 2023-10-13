const FormButtons = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  return (
    <div className="mt-4 space-x-3">
      <button type="button" className={className} onClick={onSecondaryClick}>
        {secondaryLabel}
      </button>
      <button type="button" className={className} onClick={onPrimaryClick}>
        {primaryLabel}
      </button>
    </div>
  );
};

export default FormButtons;
