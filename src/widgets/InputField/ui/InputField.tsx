import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import { SectionField } from "@/shared/ui/SectionField/SectionField";
import { useFieldSet } from "@/shared/hooks/useFieldSet";

type Props = {
  onUpdate: (name: string | null, value: string | null, error: boolean) => void;
  onRemove: () => void;
};

export function InputField({ onUpdate, onRemove }: Props) {
  const { name, setName, setValue, labelError } = useFieldSet<string>({
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
      <Input label={name ?? ""} onChange={(e) => setValue(e.target.value)} />
      <Button kit={ButtonKits.WARNING} onClick={onRemove}>
        Remove field
      </Button>
    </SectionField>
  );
}
