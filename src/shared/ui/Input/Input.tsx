import styles from "./Input.module.scss";
import clsx from "clsx";

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
  error,
}: Props) {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={clsx(styles.input, styles[`input_kit_${kit}`], className)}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? ""}
        disabled={disabled}
        autoComplete="off"
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
}
