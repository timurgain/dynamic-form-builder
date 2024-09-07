import styles from "./Button.module.scss";
import clsx from "clsx";

export enum ButtonKits {
  DEFAULT = "default",
  WARNING = "warning",
}

type Props = {
  kit?: ButtonKits;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  onClick,
  kit = ButtonKits.DEFAULT,
  type = "button",
  className,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[`button_kit_${kit}`], className)}
    >
      {children}
    </button>
  );
}
