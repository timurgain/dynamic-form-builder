import { InputField } from "@/widgets/InputField";
import styles from "./DynamicFormBuilder.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";
import { CreationButtons } from "@/widgets/CreationButtons";
import { Button } from "@/shared/ui/Button/Button";

export function DynamicFormBuilder() {
  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <CreationButtons />
      <form className={styles.form} onSubmit={() => {}}>
        <InputField />
        <CheckboxField />
        <SelectField />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
