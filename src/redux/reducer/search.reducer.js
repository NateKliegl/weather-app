import { SET_SEARCH, CLEAR_SEARCH } from "../actions";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.weather;
    case CLEAR_SEARCH:
      return [];

    default:
      return state;
  }
}
