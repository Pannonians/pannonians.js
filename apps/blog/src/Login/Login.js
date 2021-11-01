import { useContext } from "react";
import { Redirect } from "react-router-dom";
import authStore from "../store/authStore";
import Firebase from "../firebase";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Skoljka_color from "../Skoljka_color.png";

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

    <div className="mainContainer">
      <div className="Text"><h className="Title">Pannonians Blog</h>
      <p className="subtitle">Learning React and JS</p></div>
     
      
      <div className="loginContainer">
        <div className="Logo">
          <img src={Skoljka_color} />
        </div>

        <button
          className="Google"
          onClick={(event) => signup(event, GoogleAuthProvider)}
        >
          <i className="fab fa-google"></i>
          Login with Google
        </button>
        <button
          className="Github"
          onClick={(event) => signup(event, GithubAuthProvider)}
        >
          <i className="fab fa-github"></i>
          Login with Github
        </button>
      </div>

    </div>
  );
}
