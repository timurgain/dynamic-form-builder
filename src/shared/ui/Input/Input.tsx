import styles from "./Input.module.scss";
import clsx from "clsx";
import WarningIcon from "@/shared/assets/icons/warning.svg?react";

export enum ImportTypes {
  TEXT = "text",
}

export enum InputKits {
  DEFAULT = "default",
}

type Props = {
  kit?: InputKits;
  type?: ImportTypes;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export function Input({
  kit = InputKits.DEFAULT,
  type = ImportTypes.TEXT,
  label,
  value,
  onChange,
  placeholder,
  className,
  disabled = false,
  required = false,
  error,
}: Props) {
  return (
    <label className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <sup className={styles["label__asterisk"]}>*</sup>}
      </span>
      <input
        className={clsx(
          styles.input,
          styles[`input_kit_${kit}`],
          { [styles["input_error"]]: error },
          className,
        )}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? ""}
        disabled={disabled}
        autoComplete="off"
        required={required}
      />

      {error && <span className={styles["error-msg"]}>{error}</span>}
      {error && <WarningIcon className={styles.icon} />}
    </label>
  );
}
