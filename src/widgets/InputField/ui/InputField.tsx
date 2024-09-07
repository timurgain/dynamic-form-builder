import { Input } from "@/shared/ui/Input/Input";
import styles from "./InputField.module.scss";

export function InputField() {
  return (
    <section className={styles.section}>
      <Input label="Label" />
      <Input label="Value" />
    </section>
  );
}
