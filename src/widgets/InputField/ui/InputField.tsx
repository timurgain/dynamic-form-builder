import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
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

export function InputField({ field, onUpdate, onRemove }: Props) {
  const { name, value, error } = field;

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => onUpdate(e.target.value, value, error)}
        required
        error={error}
      />
      <Input
        label={name ?? ""}
        value={value?.toString() ?? ""}
        onChange={(e) => onUpdate(name, e.target.value, error)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
