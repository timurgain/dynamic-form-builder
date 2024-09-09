import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Select, Option } from "@/shared/ui/Select/Select";
import { useState } from "react";

const options = [
  { value: "value1", label: "Value 1" },
  { value: "value2", label: "Value 2" },
  { value: "value3", label: "Value 3" },
];

type Props = {
  onRemove: () => void;
  onUpdate: (name: string, value: Option | null) => void;
};

export function SelectField({ onRemove, onUpdate }: Props) {
  const [name, setName] = useState("");
  const [value, setValue] = useState<Option | null>(null);

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => {
          setName(e.target.value);
          onUpdate(e.target.value, value);
        }}
        required
      />
      <Select
        label={name}
        options={options}
        onSelect={(option) => {
          console.log("option", option);

          setValue(option);
          onUpdate(name, option);
        }}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
