import { InputField } from "@/widgets/InputField";
import styles from "./DynamicFormBuilder.module.scss";
import { CheckboxField } from "@/widgets/CheckboxField";
import { SelectField } from "@/widgets/SelectField";
import { CreationButtons } from "@/widgets/CreationButtons";
import { Button } from "@/shared/ui/Button/Button";
import { useReducer } from "react";
import { formReducer, initialState } from "../state/reducers";
import { useActions } from "../state/useActions";

export function DynamicFormBuilder() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { addField, removeField, updateField } = useActions(dispatch);

  return (
    <main className={styles.main}>
      <h1>Demo</h1>
      <CreationButtons onAddField={addField} />
      <form className={styles.form} onSubmit={() => {}}>
        {state.fields.map((field) => {
          if (field.type === "input")
            return (
              <InputField
                key={field.id}
                onRemove={() => removeField({ id: field.id })}
                onUpdate={(name: string, value: string) =>
                  updateField({ id: field.id, name, value })
                }
              />
            );
          if (field.type === "checkbox")
            return (
              <CheckboxField
                key={field.id}
                onRemove={() => removeField({ id: field.id })}
                onUpdate={(name: string, value: boolean) => {
                  updateField({ id: field.id, name, value });
                }}
              />
            );
          if (field.type === "select")
            return (
              <SelectField
                key={field.id}
                onRemove={() => removeField({ id: field.id })}
              />
            );
        })}

        {state.fields.length > 0 && <Button type="submit">Submit</Button>}
      </form>
    </main>
  );
}
