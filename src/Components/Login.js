import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Login({ isLogin, dispatch }) {
  const [useremail, setuserEmail] = React.useState("");
  const [userpassword, setuserPassord] = React.useState("");

  if (isLogin) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>You are logged in</h1>
        <Link to="/">Click here to go to Home</Link>
      </div>
    );
  }
  return (
    <div
      style={{
        textAlign: "center",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f3f2ee",
        padding: "10px",
        marginTop: "50px",
        boxShadow: "0 5px 15px rgb(0 0 0 / 10%)",
      }}
    >
      <form className="setup-form">
        <h2>Login</h2>

        <div className="form-control">
          <label htmlFor="useremail">Email</label>
          <input
            type="email"
            name="useremail"
            id="useremail"
            className="form-input"
            value={useremail}
            onChange={(e) => setuserEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="userpassword">Password</label>
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            className="form-input"
            value={userpassword}
            onChange={(e) => setuserPassord(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={() => {
            dispatch({ type: "signin", payload: { useremail, userpassword } });
          }}
          className="submit-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
}

const mapStatetoprops = (state) => {
  console.log(state);
  return { isLogin: state.islogin };
};

export default connect(mapStatetoprops)(Login);
