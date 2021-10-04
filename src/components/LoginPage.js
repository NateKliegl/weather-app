import { useState } from "react";

import { connect } from "react-redux";
import { setUser } from "../redux/actions";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {error && username.length < 4 && "Must Have At Least 4 Characters"}
      </div>
      <div>
        {" "}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error && password.length < 4 && "Must Have At Least 4 Characters"}
      </div>
      <button
        onClick={() => {
          if (username.length < 4 || password.length < 4) {
            setError(true);
            return;
          }
          setUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
