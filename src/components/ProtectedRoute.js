import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ user, children, path, protected }) {
  const redirectTo = protected ? "/login" : "/search";
  if ((user && protected) || (!user && !protected)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={redirectTo}></Redirect>;
  }
  return;
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
