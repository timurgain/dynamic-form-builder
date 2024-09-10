export enum Fields {
  INPUT = "input",
  CHECKBOX = "checkbox",
  SELECT = "select",
}

export type Option = {
  value: string | number;
  label: string;
};

export type Value = string | boolean | Option | null;

export type FieldState = {
  type: Fields;
  id: string;
  name: string | null;
  value: Value;
  error: boolean;
};
