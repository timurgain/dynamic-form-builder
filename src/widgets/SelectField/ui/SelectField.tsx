import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Select } from "@/shared/ui/Select/Select";
import { useState } from "react";

const options = [
  { value: "value1", label: "Value 1" },
  { value: "value2", label: "Value 2" },
  { value: "value3", label: "Value 3" },
];

type Props = {
  onRemove: () => void;
};

export function SelectField({ onRemove }: Props) {
  const [name, setName] = useState("");

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Select
        label={name}
        options={options}
        onSelect={(value) => console.log(value)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
