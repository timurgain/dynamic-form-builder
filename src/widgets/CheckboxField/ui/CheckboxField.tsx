import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { useState } from "react";

type Props = {
  onRemove: () => void;
  onUpdate: (name: string, value: boolean) => void;
};

export function CheckboxField({ onRemove, onUpdate }: Props) {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<boolean>(false);

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
      <Checkbox
        label={name}
        onChange={(e) => {
          setValue(e.target.checked);
          onUpdate(name, e.target.checked);
        }}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
