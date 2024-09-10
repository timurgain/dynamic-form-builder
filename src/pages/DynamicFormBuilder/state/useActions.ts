import { v4 as uuidv4 } from "uuid";

import {
  ActionRemoveField,
  Actions,
  ActionTypes,
  ActionUpdateField,
} from "./types";

import { useCallback } from "react";

import { Dispatch } from "react";
import { Fields } from "@/shared/types";

export function useActions(dispatch: Dispatch<ActionTypes>) {
  const addField = useCallback(
    ({ type: fieldType }: { type: Fields }) => {
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

  const submitForm = useCallback(() => {
    dispatch({
      type: Actions.SUBMIT_FORM,
      payload: null,
    });
  }, [dispatch]);

  return { addField, updateField, removeField, submitForm };
}
