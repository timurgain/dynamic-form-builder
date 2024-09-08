import { InputField } from "@/widgets/InputField";
import styles from "./DemoPage.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";
import { CreationButtons } from "@/widgets/CreationButtons";

export function DemoPage() {
  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <CreationButtons />
      <InputField />
      <CheckboxField />
      <SelectField />
    </main>
  );
}
