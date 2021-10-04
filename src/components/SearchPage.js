import { useState } from "react";
import React from "react";
import Display from "./Display";
import { addLocation, deleteLocation, setSearch } from "../redux/actions";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
function SearchPage({ user, addFavorite, deleteFavorite, favorites }) {
  const [searchInput, setSearchInput] = useState("");
  const [data, error, loading] = useFetch(search);
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <label>Search</label>
        <input
          id="search"
          placeholder="Search for Weather"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button onClick={() => setSearch(searchInput)}>Search</button>
      </div>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {data &&
          !loading &&
          data.map((val) => (
            <Display
              deleteLocation={deleteLocation}
              addLocation={addLocation}
              isFavorite={favorites.some(
                (fave) => fave.location === val.location
              )}
              location={val.location}
            />
          ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
    favorites: state.favorites,
  };
};
const mapDispatchToProps = {
  addLocation,
  deleteLocation,
  setSearch,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
