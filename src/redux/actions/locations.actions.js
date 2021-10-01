export const ADD_LOCATION = "Add Location";
export function addLocation(weather) {
  return { type: ADD_LOCATION, weather };
}

export const DELETE_LOCATION = "Delete Location";
export function deleteLocation(location) {
  return { type: DELETE_LOCATION, location };
}

export const CLEAR_LOCATION = "Clear Location";
export function clearLocation() {
  return { type: CLEAR_LOCATION };
}
