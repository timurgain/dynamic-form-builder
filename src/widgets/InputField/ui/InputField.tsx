import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { useState } from "react";

type Props = {
  onUpdate: (name: string, value: string) => void;
  onRemove: () => void;
};

export function InputField({ onUpdate, onRemove }: Props) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

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
      <Input
        label={name}
        onChange={(e) => {
          setValue(e.target.value);
          onUpdate(name, e.target.value);
        }}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
