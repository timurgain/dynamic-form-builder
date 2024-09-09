import { ActionTypes, State, Actions, FieldState } from "./types";

export const initialState = {
  fields: [],
  isFormValid: false,
};

function checkFormValidity(fields: FieldState[]) {
  return fields.every((field) => !field.error && field.name);
}

export function formReducer(
  state: State | typeof initialState,
  action: ActionTypes,
) {
  switch (action.type) {
    case Actions.ADD_FIELD: {
      const newFields = [...state.fields, { ...action.payload }];
      return {
        ...state,
        fields: newFields,
        isFormValid: false,
      };
    }

    case Actions.UPDATE_FIELD: {
      const newFields = state.fields.map((field) =>
        field.id === action.payload.id
          ? {
              ...field,
              name: action.payload.name,
              value: action.payload.value,
              error: action.payload.error,
            }
          : field,
      );
      return {
        ...state,
        fields: newFields,
        isFormValid: checkFormValidity(newFields),
      };
    }

    case Actions.REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload.id),
      };

    default:
      return state;
  }
}
