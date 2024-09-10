import { TEXT_REQUIRED } from "@/shared/constants/validation";
import { useEffect } from "react";
import { FieldState, Value } from "../types";

type Props = {
  field: FieldState;
  onUpdate: (name: string | null, value: Value, error: boolean) => void;
};

export function useFieldSet({ field, onUpdate }: Props) {
  // const [name, setName] = useState<null | string>(null);
  // const [value, setValue] = useState<null | T>(null);
  // const [labelError, setLabelError] = useState<null | string>(null);

  const { name, value, error } = field;

  useEffect(() => {
    onUpdate(name, value, error);
    if (
      (name === null && value === null) ||
      (name &&
        name.length >= TEXT_REQUIRED.minLength.value &&
        name.length <= TEXT_REQUIRED.maxLength.value &&
        labelError)
    ) {
      setLabelError(null);
      return;
    }

    if (name === "" || (value && !name)) {
      setLabelError(TEXT_REQUIRED.required.message);
      return;
    }
    if (name && name.length < TEXT_REQUIRED.minLength.value) {
      setLabelError(TEXT_REQUIRED.minLength.message);
      return;
    }

    if (name && name.length > TEXT_REQUIRED.maxLength.value) {
      setLabelError(TEXT_REQUIRED.maxLength.message);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelError, name, value]);

  return {
    name,
    setName,
    value,
    setValue,
    labelError,
  };
}
