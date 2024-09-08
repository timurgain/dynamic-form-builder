export type Field = "input" | "checkbox" | "select";

export type FieldState = {
  type: Field;
  id: string;
  name: string | null;
  value: string | boolean | Record<string, string | number> | null;
};

export type State = { fields: FieldState[] };

export enum Actions {
  ADD_FIELD = "ADD_FIELD",
  UPDATE_FIELD = "UPDATE_FIELD",
  REMOVE_FIELD = "REMOVE_FIELD",
}

export type ActionAddField = {
  type: Actions.ADD_FIELD;
  payload: {
    type: Field;
  };
};

export type ActionUpdateField = {
  type: Actions.UPDATE_FIELD;
  payload: {
    id: string;
    name: string | null;
    value: string | boolean | Record<string, string | number> | null;
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
