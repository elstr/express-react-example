// Importo createAction
import { createAction } from "redux-actions";

// Actions
export const ADD_USER = "ADD_USER";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";

// Action Creators
export const addUser = createAction(ADD_USER);
export const getUsers = createAction(GET_USERS);
export const editUser = createAction(EDIT_USER);
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);
export const editUserSuccess = createAction(EDIT_USER_SUCCESS);
