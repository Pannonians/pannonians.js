import "../App.css";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import Firebase from "../firebase";
import authStore from "../store/authStore";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;


function App() {
  const [posts, setPosts] = useState([]);


  const getPosts = async () => {
    const { data } = await axios.get(POSTS_URL);

    setPosts(data);
  };

  useEffect(() => {

    getPosts();

  }, []);

  const history = useHistory();
  const { auth } = Firebase.getInstance();
  const { currentUser } = auth;
  const [isAuthenticated] = useContext(authStore);


  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
    }
  }, [history, isAuthenticated]);

  const logout = async () => {
    await auth.signOut();
    history.push("/login");
  };

  if (!isAuthenticated) return <div></div>;
  return (
    <div className="App App-header">
      <header className="App-header">
        <nav className="headerMenu">
          <a href="#">About us</a>
          <a href ="#">Posts</a>
          <a href ="#">Contact Us</a> 
          </nav>
          <div>
        {currentUser && currentUser.email && (
          <div>
            <div className="headerMenu a userInfo">
              <img src={currentUser.photoURL} alt="profile" />
              <p>{currentUser.displayName}</p>
              <p>{currentUser.email}</p>
              <button onClick={logout}>Sign out</button>
            </div>
            {/* <h1>Blog incoming, jel sad dobro!</h1> */}
          </div>
        )}

        {console.log(currentUser)}
        </div>
        <div>
          <pre>
            <code>{JSON.stringify(posts, "", 2)}</code>
          </pre>
        </div>
       
      </header>
    </div>
  );
}

export default App;
