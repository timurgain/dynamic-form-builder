import { FieldState, Value } from "@/shared/types";

export type State = {
  fields: FieldState[];
  isFormValid: boolean;
  submittedData: null | Record<string, Value>;
};

export enum Actions {
  ADD_FIELD = "ADD_FIELD",
  UPDATE_FIELD = "UPDATE_FIELD",
  REMOVE_FIELD = "REMOVE_FIELD",
  SUBMIT_FORM = "SUBMIT_FORM",
}

export type ActionAddField = {
  type: Actions.ADD_FIELD;
  payload: FieldState;
};

export type ActionUpdateField = {
  type: Actions.UPDATE_FIELD;
  payload: Omit<FieldState, "type">;
};

export type ActionRemoveField = {
  type: Actions.REMOVE_FIELD;
  payload: { id: FieldState["id"] };
};

export type ActionSubmitForm = {
  type: Actions.SUBMIT_FORM;
  payload: null;
};

export type ActionTypes =
  | ActionAddField
  | ActionRemoveField
  | ActionUpdateField
  | ActionSubmitForm;
