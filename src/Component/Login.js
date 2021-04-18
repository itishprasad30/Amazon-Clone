import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)

      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    console.log(email);
  }, []);

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="
           data:image/png;base64,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
            "
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-IN</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h6>Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditons of Use & Sale. Plese see
          our Privacy Notice,our Cookies Notice and out interest-Based Ads
          Notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create a New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
