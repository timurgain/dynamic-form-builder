import { v4 as uuidv4 } from "uuid";
import { ActionTypes, State, Actions } from "./types";

const InitialState = {
  fields: [],
};

export function formReducer(
  state: State | typeof InitialState = InitialState,
  action: ActionTypes,
) {
  switch (action.type) {
    case Actions.ADD_FIELD:
      return {
        ...state,
        fields: [
          ...state.fields,
          { type: action.payload.type, id: uuidv4(), name: null, value: null },
        ],
      };

    case Actions.UPDATE_FIELD:
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload.id
            ? {
                ...field,
                name: action.payload.name,
                value: action.payload.value,
              }
            : field,
        ),
      };

    case Actions.REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload.id),
      };

    default:
      return state;
  }
}
