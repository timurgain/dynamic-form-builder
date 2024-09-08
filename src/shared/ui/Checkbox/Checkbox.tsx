import clsx from "clsx";
import styles from "./Checkbox.module.scss";

type Props = {
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export function Checkbox({
  label = "checkbox",
  checked,
  onChange,
  disabled = false,
  required = false,
  error,
}: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <sup className={styles["label__asterisk"]}>*</sup>}
      </span>
      <div
        className={clsx(styles.checkbox, { [styles["checkbox_error"]]: error })}
      >
        <input
          type="checkbox"
          id={`checkbox-${label}`}
          name={label}
          required={required}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label htmlFor={`checkbox-${label}`}></label>
        {error && <span className={styles["error-msg"]}>{error}</span>}
      </div>
    </div>
  );
}
