import styles from "./Button.module.scss";
import clsx from "clsx";

export enum ButtonKits {
  DEFAULT = "default",
  WARNING = "warning",
}

type Props = {
  kit?: ButtonKits;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export function Button({
  kit = ButtonKits.DEFAULT,
  className,
  style,
  type = "button",
  disabled = false,
  onClick,
  children,
}: Props) {
  return (
    <button
      className={clsx(styles.button, styles[`button_kit_${kit}`], className)}
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
