import { Option } from "@/shared/ui/Select/Select";

export enum Fields {
  INPUT = "input",
  CHECKBOX = "checkbox",
  SELECT = "select",
}

export type Value = string | boolean | Option | null;

export type FieldState = {
  type: Fields;
  id: string;
  name: string | null;
  value: Value;
  error: boolean;
};

export type State = { fields: FieldState[]; isFormValid: boolean };

export enum Actions {
  ADD_FIELD = "ADD_FIELD",
  UPDATE_FIELD = "UPDATE_FIELD",
  REMOVE_FIELD = "REMOVE_FIELD",
}

export type ActionAddField = {
  type: Actions.ADD_FIELD;
  payload: {
    id: string;
    type: Fields;
    name: null;
    value: null;
    error: boolean;
  };
};

export type ActionUpdateField = {
  type: Actions.UPDATE_FIELD;
  payload: {
    id: string;
    name: string | null;
    value: Value;
    error: boolean;
  };
};

export type ActionRemoveField = {
  type: Actions.REMOVE_FIELD;
  payload: {
    id: string;
  };
};

export type ActionTypes =
  | ActionAddField
  | ActionRemoveField
  | ActionUpdateField;
