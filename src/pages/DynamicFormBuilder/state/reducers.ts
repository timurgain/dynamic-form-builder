import { v4 as uuidv4 } from "uuid";

const InitialState = {
  fields: [],
};

type State = { fields: FieldState[] };

type Field = "input" | "checkbox" | "select";

type FieldState = {
  type: Field;
  id: string;
  name: string | null;
  value: string | boolean | Record<string, string | number> | null;
};

type ActionAddField = {
  type: "ADD_FIELD";
  payload: {
    type: Field;
    // id: string,
    // name: string | null,
    // value: string | boolean | Record<string, string | number> | null,
  };
};

type ActionUpdateField = {
  type: "UPDATE_FIELD";
  payload: {
    id: string;
    name: string | null;
    value: string | boolean | Record<string, string | number> | null;
  };
};

type ActionRemoveField = {
  type: "REMOVE_FIELD";
  payload: {
    id: string;
  };
};

type ActionTypes = ActionAddField | ActionRemoveField | ActionUpdateField;

export function formReducer(
  state: State | typeof InitialState = InitialState,
  action: ActionTypes,
) {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        fields: [
          ...state.fields,
          { type: action.payload.type, id: uuidv4(), name: null, value: null },
        ],
      };

    case "UPDATE_FIELD":
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

    case "REMOVE_FIELD":
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload.id),
      };

    default:
      return state;
  }
}
