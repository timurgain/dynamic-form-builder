import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

export function CheckboxField() {
  return (
    <SectionField>
      <Input label="Set label" required />
      <Checkbox
        name={"Checkbox"}
        error={false}
        checked={false}
        onChange={() => {}}
      />
      <Button kit={ButtonKits.WARNING}>Remove field</Button>
    </SectionField>
  );
}
