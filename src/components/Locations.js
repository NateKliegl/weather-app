import React from "react";
import Display from "./Display";
import { deleteLocation } from "../redux/actions";
import { connect } from "react-redux";

function Locations({ user, deleteLocation, favorites }) {
  return (
    <div>
      <div>{user}</div>
      {favorites.map((val) => (
        <Display
          current={val.current}
          location={val.location}
          deleteLocation={deleteLocation}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorites: state.favorites,
  };
};
const mapDispatchToProps = {
  deleteLocation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
