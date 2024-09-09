import { v4 as uuidv4 } from "uuid";

import {
  ActionAddField,
  ActionRemoveField,
  Actions,
  ActionTypes,
  ActionUpdateField,
} from "./types";

import { useCallback } from "react";

import { Dispatch } from "react";

export function useActions(dispatch: Dispatch<ActionTypes>) {
  const addField = useCallback(
    ({ type: fieldType }: ActionAddField["payload"]) => {
      dispatch({
        type: Actions.ADD_FIELD,
        payload: {
          id: uuidv4(),
          type: fieldType,
          name: null,
          value: null,
          error: false,
        },
      });
    },
    [dispatch],
  );

  const updateField = useCallback(
    ({ id, name, value, error }: ActionUpdateField["payload"]) => {
      dispatch({
        type: Actions.UPDATE_FIELD,
        payload: {
          id,
          name: name ? name.replace(/\s+/g, "-") : name,
          value,
          error,
        },
      });
    },
    [dispatch],
  );
  const removeField = useCallback(
    ({ id }: ActionRemoveField["payload"]) => {
      dispatch({
        type: Actions.REMOVE_FIELD,
        payload: { id },
      });
    },
    [dispatch],
  );

  return { addField, updateField, removeField };
}
