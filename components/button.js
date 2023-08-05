export default function Button({ label, className, type = "primary", disabled = false }) {
  const common_classes = [
    "txt-button",
    "block",
    "w-full",
    "rounded-md",
    "p-s",
    "font-sans",
    // enabled:active
    "enabled:active:translate-x-px",
    "enabled:active:translate-y-px",
    // disabled
    "disabled:cursor-not-allowed",
  ];

  const primary_classes = [
    "bg-primary",
    "text-on-primary",
    // hover
    "hover:bg-tones-P_50",
    // focus
    "focus:ring-2",
    "focus:ring-focused",
    "focus:ring-offset-2",
    // enabled:active
    "active:bg-tones-P_30",
    // disabled
    "disabled:bg-disabled",
    "disabled:text-on-disabled",
  ];

  const secondary_classes = [
    "text-primary",
    "border-2",
    "border-primary",
    "bg-surface",
    // hover
    "hover:bg-primary-container",
    // focus
    "focus:border-focused",
    // enabled:active
    "active:bg-primary-container",
    // diabled
    "disabled:border-disabled",
    "disabled:bg-on-disabled",
    "disabled:text-disabled",
  ];

  const tertiary_classes = [
    "text-primary",
    "underline",
    "decoration-1",
    "underline-offset-4",
    // hover
    "hover:text-on-primary-container",
    // focus
    "focus:border-2",
    "focus:border-focused",
    // enabled:active
    "active:text-on-primary-container",
    // disabled
    "disabled:text-disabled",
    "disabled:bg-on-disabled",
  ];

  let target_classes = [];

  switch (type) {
    case "primary":
      target_classes = common_classes.concat(primary_classes);
      break;
    case "secondary":
      target_classes = common_classes.concat(secondary_classes);
      break;
    case "tertiary":
      target_classes = common_classes.concat(tertiary_classes);
      break;
  }
  return (
    <button className={target_classes.join(" ") + ` ${className}`} disabled={disabled}>
      {label}
    </button>
  );
}
