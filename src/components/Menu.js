import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearLocation, clearSearch, clearUser } from "../redux/actions";
function Menu({ user, clearLocation, clearUser, clearSearch }) {
  return (
    <nav>
      {user}
      {!user && (
        <NavLink className="link" activeClassName="active" to="/login">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink className="link" activeClassName="active" to="/search">
            Search
          </NavLink>
          <NavLink className="link" activeClassName="active" to="/locations">
            Saved Locations
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/login"
            onClick={() => {
              clearLocation();
              clearSearch();
              clearUser();
            }}
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  clearLocation,
  clearSearch,
  clearUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
