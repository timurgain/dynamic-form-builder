import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Select } from "@/shared/ui/Select/Select";
import { FieldState, Value } from "@/shared/types";

const options = [
  { value: "value1", label: "Value 1" },
  { value: "value2", label: "Value 2" },
  { value: "value3", label: "Value 3" },
];

type Props = {
  field: FieldState;
  onUpdate: (
    name: string | null,
    value: Value,
    error: FieldState["error"],
  ) => void;
  onRemove: () => void;
};

export function SelectField({ field, onUpdate, onRemove }: Props) {
  const { name, value, error } = field;

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => onUpdate(e.target.value, value, error)}
        required
        error={error}
      />
      <Select
        label={name ?? ""}
        options={options}
        onSelect={(option) => onUpdate(name, option, error)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
