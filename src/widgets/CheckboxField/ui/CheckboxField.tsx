import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { useFieldSet } from "@/shared/hooks/useFieldSet";

type Props = {
  id: string;
  onUpdate: (
    name: string | null,
    value: boolean | null,
    error: boolean,
  ) => void;
  onRemove: () => void;
};

export function CheckboxField({ id, onRemove, onUpdate }: Props) {
  const { name, setName, setValue, labelError } = useFieldSet<boolean>({
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
      <Checkbox
        id={id}
        label={name ?? ""}
        onChange={(e) => setValue(e.target.checked)}
      />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
