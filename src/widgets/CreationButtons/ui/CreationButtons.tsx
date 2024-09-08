import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import styles from "./CreationButtons.module.scss";

export function CreationButtons() {
  return (
    <section className={styles.section}>
      <Button kit={ButtonKits.DEFAULT}>Add Input</Button>
      <Button kit={ButtonKits.DEFAULT}>Add Checkbox</Button>
      <Button kit={ButtonKits.DEFAULT}>Add Dropdown</Button>
    </section>
  );
}
