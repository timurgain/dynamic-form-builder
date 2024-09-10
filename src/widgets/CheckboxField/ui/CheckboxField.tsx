import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { FieldState, Value } from "@/shared/types";

type Props = {
  field: FieldState;
  onUpdate: (
    name: string | null,
    value: Value,
    error: FieldState["error"],
  ) => void;
  onRemove: () => void;
};

export function CheckboxField({ field, onRemove, onUpdate }: Props) {
  const { name, value, error } = field;

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => onUpdate(e.target.value, !!value, error)}
        required
        error={error}
      />
      <Checkbox
        id={field.id}
        label={name ?? ""}
        onChange={(e) => onUpdate(name, e.target.checked, error)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
