import { TEXT_REQUIRED } from "@/shared/constants/validation";
import { FieldState } from "@/shared/types";

export function checkFormValidity(fields: FieldState[]) {
  return fields.every((field) => !field.error && field.name);
}

export function checkFieldValidity(
  field: Omit<FieldState, "type">,
  fields: FieldState[],
) {
  const { name, value } = field;

  if (name === "" || (value !== null && !name)) {
    return TEXT_REQUIRED.required.message;
  }
  if (name && name.length < TEXT_REQUIRED.minLength.value) {
    return TEXT_REQUIRED.minLength.message;
  }

  if (name && name.length > TEXT_REQUIRED.maxLength.value) {
    return TEXT_REQUIRED.maxLength.message;
  }

  if (fields.some((f) => f.name === field.name && f.id !== field.id)) {
    return TEXT_REQUIRED.unique.message;
  }

  return null;
}
