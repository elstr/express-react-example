const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_USERS": {
      return state;
    }
    case "GET_USERS_SUCCESS":
    case "ADD_USER_SUCCESS":
    case "EDIT_USER_SUCCESS":
    case "REMOVE_USER_SUCCESS": {
      console.log({ action });
      return [...action.payload];
    }
    default:
      return state;
  }
}
