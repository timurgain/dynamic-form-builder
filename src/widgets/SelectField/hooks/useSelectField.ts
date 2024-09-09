import { TEXT_REQUIRED } from "@/shared/constants/validation";
import { Option } from "@/shared/ui/Select/Select";
import { useEffect, useState } from "react";

type Props = {
  onUpdate: (name: string, value: Option | null, error: boolean) => void;
};

export function useSelectField({ onUpdate }: Props) {
  const [name, setName] = useState("");
  const [value, setValue] = useState<null | Option>(null);
  const [labelError, setLabelError] = useState<null | string>(null);

  useEffect(() => {
    onUpdate(name, value, !!labelError);
    if (
      (!name.length && value === null) ||
      (name.length >= TEXT_REQUIRED.minLength.value &&
        name.length <= TEXT_REQUIRED.maxLength.value &&
        labelError)
    ) {
      setLabelError(null);
      return;
    }
    if (name.length === 0) {
      setLabelError(TEXT_REQUIRED.required.message);
      return;
    }
    if (name.length < TEXT_REQUIRED.minLength.value) {
      setLabelError(TEXT_REQUIRED.minLength.message);
      return;
    }

    if (name.length > TEXT_REQUIRED.maxLength.value) {
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
