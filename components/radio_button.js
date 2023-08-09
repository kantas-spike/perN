export default function RadioButton({
  label,
  value,
  name,
  id,
  type = "normal",
  checkedValue,
  description,
  disabled,
  hasError,
  onChanged,
}) {
  let radio_classes;
  if (hasError) {
    radio_classes = ["outline-error"];
  } else if(disabled) {
    radio_classes = ["outline-disabled/60"];
  } else {
    radio_classes = ["outline-on-surface"];
  }

  return (
    <RadioButtonLayout
      label={label}
      id={id}
      type={type}
      description={description}
      disabled={disabled}
      hasError={hasError}
      checked={checkedValue === value}
    >
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={checkedValue === value}
        disabled={disabled}
        className={`h-5 w-5 disabled:cursor-not-allowed appearance-none rounded-full border-4 border-surface accent-tones-P_50 outline outline-2 checked:bg-primary checked:outline-primary ${radio_classes.join(
          " ",
        )}`}
        onChange={onChanged}
      />
    </RadioButtonLayout>
  );
}

export function RadioButtonLayout({
  children,
  label,
  id,
  type = "normal",
  disabled,
  description,
  hasError,
  checked,
}) {
  let label_classes = ['text-on-surface']
  let desc_classes = ['text-on-surface-variant']
  let border_classes = ['border', 'border-outline']

  if (hasError) {
    label_classes = ['text-error']
    desc_classes = ['text-error']
    border_classes = ['border-2', 'border-error']
  }

  if (disabled) {
    label_classes = ['text-disabled/60']
    desc_classes = ['text-disabled/60']
  }


  if (checked) {
    border_classes = ['border-2', 'border-primary']
  }

  let content;
  if (type === "tile") {
    content = (
      <div
        className={`flex-rows flex gap-s pl-s items-center rounded-md bg-surface py-s ${border_classes.join(' ')}`}
      >
        {children}
        <div className="w-full">
          <label htmlFor={id} className={`py-3xs block ${label_classes.join(' ')}`}>
            {label}
            <div className={`txt-comment-l ${desc_classes.join(' ')}`}>
              {description}
            </div>
          </label>
        </div>
      </div>
    );
  } else {
    content = (
      <div className={`flex-rows flex gap-s items-center py-xs`}>
        {children}
        <label htmlFor={id} className={`py-3xs block w-full ${label_classes.join(' ')}`}>
          {label}
        </label>
      </div>
    );
  }
  return content;
}
