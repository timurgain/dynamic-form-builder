import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";

export function InputField() {
  return (
    <SectionField>
      <Input label="Set label" required />
      <Input label="Enter value" />
      <Button kit={ButtonKits.WARNING}>Remove field</Button>
    </SectionField>
  );
}
