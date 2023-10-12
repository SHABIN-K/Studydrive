
const FormButtons = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="mt-4 space-x-3">
      <button type="button" className="btn_form" onClick={onSecondaryClick}>
        {secondaryLabel}
      </button>
      <button type="button" className="btn_form" onClick={onPrimaryClick}>
        {primaryLabel}
      </button>
    </div>
  );
};

export default FormButtons;
