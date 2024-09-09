import { InputField } from "@/widgets/InputField";
import styles from "./DynamicFormBuilder.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";
import { CreationButtons } from "@/widgets/CreationButtons";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { useReducer } from "react";
import { formReducer, initialState } from "../state/reducers";
import { useActions } from "../state/useActions";
import { Option } from "@/shared/ui/Select/Select";

export function DynamicFormBuilder() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { addField, removeField, updateField, submitForm } =
    useActions(dispatch);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitForm();
  }

  return (
    <main className={styles.main}>
      <h1 className={styles["main__title"]}>Form Builder Demo</h1>
      <CreationButtons onAddField={addField} />
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {state.fields.map((field) => {
          if (field.type === "input")
            return (
              <InputField
                key={field.id}
                onRemove={() => removeField({ id: field.id })}
                onUpdate={(
                  name: string | null,
                  value: string | null,
                  error: boolean,
                ) => updateField({ id: field.id, name, value, error })}
              />
            );
          if (field.type === "checkbox")
            return (
              <CheckboxField
                key={field.id}
                id={field.id}
                onRemove={() => removeField({ id: field.id })}
                onUpdate={(
                  name: string | null,
                  value: boolean | null,
                  error: boolean,
                ) => {
                  updateField({ id: field.id, name, value, error });
                }}
              />
            );
          if (field.type === "select")
            return (
              <SelectField
                key={field.id}
                onRemove={() => removeField({ id: field.id })}
                onUpdate={(
                  name: string | null,
                  value: Option | null,
                  error: boolean,
                ) => {
                  updateField({ id: field.id, name, value, error });
                }}
              />
            );
        })}

        {state.fields.length > 0 && (
          <Button
            kit={ButtonKits.DEFAULT}
            style={{ marginTop: "30px" }}
            type="submit"
            disabled={!state.isFormValid}
          >
            Submit
          </Button>
        )}
      </form>

      {state.submittedData && (
        <section className={styles.result}>
          <h2 className={styles.result__title}>Submitted Data</h2>
          <pre className={styles.result__data}>
            {JSON.stringify(state.submittedData, null, 2)}
          </pre>
        </section>
      )}
    </main>
  );
}
