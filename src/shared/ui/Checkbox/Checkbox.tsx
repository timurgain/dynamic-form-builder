import clsx from "clsx";
import styles from "./Checkbox.module.scss";

type Props = {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export function Checkbox({
  id,
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
          id={id}
          name={label}
          required={required}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label htmlFor={id}></label>
        {error && <span className={styles["error-msg"]}>{error}</span>}
      </div>
    </div>
  );
}
