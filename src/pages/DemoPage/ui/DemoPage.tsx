import { InputField } from "@/widgets/InputField";
import styles from "./DemoPage.module.scss";

export function DemoPage() {
  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <InputField />
    </main>
  );
}
