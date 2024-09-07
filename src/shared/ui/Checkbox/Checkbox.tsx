import clsx from "clsx";
import styles from "./Checkbox.module.scss";

type Props = {
  name: string;
  error: boolean;
  required?: boolean;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({
  name = "checkbox",
  error = false,
  required = false,
  checked,
  onChange,
}: Props) {
  return (
    <div
      className={clsx(styles.checkbox, { [styles["checkbox_error"]]: error })}
    >
      <input
        type="checkbox"
        id={`checkbox-${name}`}
        name={name}
        required={required}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`checkbox-${name}`}></label>
    </div>
  );
}
