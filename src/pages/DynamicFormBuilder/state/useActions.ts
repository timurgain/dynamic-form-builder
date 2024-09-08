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
          type: fieldType,
        },
      });
    },
    [dispatch],
  );

  const updateField = useCallback(
    ({ id, name, value }: ActionUpdateField["payload"]) => {
      dispatch({
        type: Actions.UPDATE_FIELD,
        payload: { id, name, value },
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
