// Importo createAction
import { createAction } from "redux-actions";

// Actions
export const ADD_GROUP = "ADD_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const GET_GROUPS = "GET_GROUPS";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";

// Action Creators
export const addGroup = createAction(ADD_GROUP);
export const removeGroup = createAction(REMOVE_GROUP);
export const getGroups = createAction(GET_GROUPS);
export const getGroupsSuccess = createAction(GET_GROUPS_SUCCESS);
