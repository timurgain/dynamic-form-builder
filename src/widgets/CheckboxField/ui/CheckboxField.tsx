import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { useState } from "react";

type Props = {
  onRemoveField: () => void;
};

export function CheckboxField({ onRemoveField }: Props) {
  const [name, setName] = useState("");

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Checkbox
        label={name}
        // error={false}
        // checked={false}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(name, e.target.checked);
        }}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemoveField}>
        Remove field
      </Button>
    </SectionField>
  );
}
