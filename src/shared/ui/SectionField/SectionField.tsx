import styles from "./SectionField.module.scss";

type Props = {
  children: React.ReactNode;
};

export function SectionField({ children }: Props) {
  return <section className={styles.section}>{children}</section>;
}
