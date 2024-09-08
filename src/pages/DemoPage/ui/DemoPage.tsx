import { InputField } from "@/widgets/InputField";
import styles from "./DemoPage.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";

export function DemoPage() {
  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <InputField />
      <CheckboxField />
      <SelectField />
    </main>
  );
}
