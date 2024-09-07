import { InputField } from "@/widgets/InputField";
import styles from "./DemoPage.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";

export function DemoPage() {
  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <InputField />
      <CheckboxField />
    </main>
  );
}
