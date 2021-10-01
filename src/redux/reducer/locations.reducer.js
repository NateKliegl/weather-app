import { ADD_LOCATION, DELETE_LOCATION, CLEAR_LOCATION } from "../actions";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [...state, action.weather];
    case DELETE_LOCATION:
      return state.filter((weather) => weather.location !== action.location);
    case CLEAR_LOCATION:
      return [];

    default:
      return state;
  }
}
