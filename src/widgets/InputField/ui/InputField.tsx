import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { useState } from "react";

export function InputField() {
  const [name, setName] = useState("");

  return (
    <SectionField>
      <Input
        label="Set label"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        label={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(name, e.target.value);
        }}
      />
      <Button kit={ButtonKits.WARNING}>Remove field</Button>
    </SectionField>
  );
}
