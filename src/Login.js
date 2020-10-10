import React, { useEffect } from "react";
import { provider, auth } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const onSubmit = () => {
    auth
      .signInWithRedirect(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error);
      });
  };

  const onSignout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="login__buttons">
      <button onClick={onSubmit}>Login</button>
      <button onClick={onSignout}>Sign Out</button>
    </div>
  );
}

export default Login;
