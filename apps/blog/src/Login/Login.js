import { useContext, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import authStore from "../store/authStore";
import Firebase from "../firebase";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const { auth, signInWithPopup } = Firebase.getInstance();

export default function Signup() {
  const [isAuthenticated, setAuthentication] = useContext(authStore);

  async function signup(event, loginProvider) {
    event.preventDefault();
    var provider = new loginProvider();
    try {
      await signInWithPopup(auth, provider);
      setAuthentication(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (isAuthenticated === null) return null;
  if (isAuthenticated === true) return <Redirect to="/dashboard" />;
  return (
    <div>
      <button onClick={(event) => signup(event, GoogleAuthProvider)}>
        Login with Google
      </button>
      <button onClick={(event) => signup(event, GithubAuthProvider)}>
        Login with Github
      </button>
    </div>
  );
}
