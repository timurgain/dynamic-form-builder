import { InputField } from "@/widgets/InputField";
import styles from "./DemoPage.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";
import { CreationButtons } from "@/widgets/CreationButtons";
import { Button } from "@/shared/ui/Button/Button";

export function DemoPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <CreationButtons />
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField />
        <CheckboxField />
        <SelectField />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
