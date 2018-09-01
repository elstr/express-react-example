const INITIAL_STATE = [];

export default function groups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_GROUPS": {
      return state;
    }
    case "GET_GROUPS_SUCCESS":
    case "ADD_GROUP_SUCCESS":
    case "EDIT_GROUP_SUCCESS":
    case "REMOVE_GROUP_SUCCESS": {
      // console.log({ action });
      return [...action.payload];
    }
    default:
      return state;
  }
}
