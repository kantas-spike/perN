import { useState } from "react";

export default function TextArea({
  rows = 4,
  cols = 24,
  maxlength,
  value,
  onTextChanged,
  description,
  isRequired,
  disabled,
  label,
  errorMessage,
  className,
}) {
  let overLengthMessage

  const styles = {};
  const padding_x2 = 2;
  if (cols || cols !== 0) {
    // tailwindCssクラスだとPurgeされるので動的な値は難しいため、 style で直接設定
    styles["width"] = `${cols + padding_x2}rem`;
  }
  if (rows || rows !== 0) {
    // tailwindCssクラスだとPurgeされるので動的な値は難しいため、 style で直接設定
    styles["height"] = `${rows * 1.5 + padding_x2}rem`;
  }

  if (maxlength && value.length > maxlength) {
    overLengthMessage = <>{`入力できる文字数を超えています。`}<br/>{`${maxlength}文字以内で入力してください。`}</>
  } else {
    overLengthMessage = null
  }

  const hasError = errorMessage || overLengthMessage
  const canShowCounter = maxlength > 20

  let border_classes = [];
  if (hasError) {
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
      <textarea
        className={`inline-block resize self-start rounded-md p-3 focus:border-2 focus:border-focused focus:outline-none disabled:cursor-not-allowed disabled:border-disabled/50 disabled:bg-disabled/20 ${className} ${border_classes.join(
          " ",
        )}`}
        style={styles}
        disabled={disabled}
        value={value}
        onChange={onTextChanged}
      ></textarea>
      <div className="flex justify-between" style={{width: styles['width']}}>
        {hasError && !disabled ? (
          <div className="txt-label-m mt-1 text-left text-error">
            {errorMessage}
            {overLengthMessage}
          </div>
        ) : ( <div></div> )}
        {canShowCounter && !disabled ? (
          <div className={`txt-label-m w-40 mt-1 text-right ${hasError ? 'text-error' : 'text-on-surface-variant'}`}>{value.length} / {maxlength}</div>
        ) : null}
      </div>
    </div>
  );
}
