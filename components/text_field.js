import { useState } from "react";

export default function TextField({
  label,
  isRequired,
  description,
  initialValue,
  errorMessage,
  fieldSize,
  fieldType = "text",
  className,
  disabled = false,
}) {
  const [value, setValue] = useState(initialValue);

  const styles = {};
  const px_size = 2;
  if (fieldSize || fieldSize !== 0) {
    // tailwindCssクラスだとPurgeされるので動的な値は難しいため、 style で直接設定
    styles["width"] = `${fieldSize + px_size}rem`;
  }

  let border_classes = [];
  if (errorMessage) {
    border_classes = ["border-2", "border-error"];
  } else {
    border_classes = ["border", "border-outline"];
  }

  return (
    <div className="flex flex-col text-on-surface">
      {label ? (
        <div className="mb-3 flex">
          <label
            className={`txt-label-l mr-2 ${disabled ? "text-disabled/60" : ""}`}
          >
            {label}
          </label>
          {isRequired && !disabled ? (
            <div className="txt-label-l text-error">必須</div>
          ) : null}
        </div>
      ) : null}
      {description && !disabled ? (
        <div className="txt-body-m mb-3 text-on-surface-variant">
          {description}
        </div>
      ) : null}
      <input
        className={`inline-block rounded-md p-3 focus:outline-none focus:border-2 focus:border-focused disabled:cursor-not-allowed disabled:border-disabled/50 disabled:bg-disabled/20 ${className} ${border_classes.join(
          " ",
        )}`}
        type={fieldType}
        maxLength={fieldSize}
        style={ styles }
        value={!disabled ? value : null}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      {errorMessage && !disabled ? (
        <div className="txt-label-m mt-1 text-error">{errorMessage}</div>
      ) : null}
    </div>
  );
}
