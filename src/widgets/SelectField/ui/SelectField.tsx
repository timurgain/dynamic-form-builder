import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Select, Option } from "@/shared/ui/Select/Select";
import { useFieldSet } from "@/shared/hooks/useFieldSet";

const options = [
  { value: "value1", label: "Value 1" },
  { value: "value2", label: "Value 2" },
  { value: "value3", label: "Value 3" },
];

type Props = {
  onUpdate: (name: string | null, value: Option | null, error: boolean) => void;
  onRemove: () => void;
};

export function SelectField({ onRemove, onUpdate }: Props) {
  const { name, setName, setValue, labelError } = useFieldSet<Option>({
    onUpdate,
  });

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => setName(e.target.value)}
        required
        error={labelError}
      />
      <Select
        label={name ?? ""}
        options={options}
        onSelect={(option) => setValue(option)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
