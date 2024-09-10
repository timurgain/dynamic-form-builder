import { ActionTypes, State, Actions } from "./types";
import { checkFieldValidity, checkFormValidity } from "./utils";

export const initialState = {
  fields: [],
  isFormValid: false,
  submittedData: null,
};

export function formReducer(state: State, action: ActionTypes) {
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
              error: checkFieldValidity(action.payload, state.fields),
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

    case Actions.SUBMIT_FORM:
      return {
        ...state,
        submittedData: state.fields.reduce((result, field) => {
          if (!field.name) return result;
          return {
            ...result,
            [field.name]: field.value,
          };
        }, {}),
      };

    case Actions.CLEAR_FORM:
      return {
        ...state,
        fields: state.fields.map((field) => {
          return {
            ...field,
            value: null,
            error: null,
          };
        }),
        isFormValid: false,
      };

    default:
      return state;
  }
}
