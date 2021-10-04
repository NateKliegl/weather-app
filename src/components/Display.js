import React from "react";

function Display({
  current,
  addFavorite,
  deleteFavorite,
  location,
  isFavorite,
}) {
  return (
    <div>
      <h2>
        {current} - {location}
      </h2>
      {!isFavorite && (
        <button onClick={() => addFavorite({ current, location })}>
          Add Location
        </button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite({ location })}>
          Delete Favorite
        </button>
      )}
    </div>
  );
}

export default Display;
