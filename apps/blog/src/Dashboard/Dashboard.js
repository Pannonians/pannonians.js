import "../App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Firebase from "../firebase";
import authStore from "../store/authStore";
import schema from "../API";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = schema.getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
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
    <div className="App">
      <header className="App-header">
        {currentUser && currentUser.email && (
          <div className="blog-header">
            <div>
              <img src={currentUser.photoURL} alt="profile" />
              <p>{currentUser.displayName}</p>
              <p>{currentUser.email}</p>
              <button onClick={logout}>Sign out</button>
            </div>
            <h1>Blog incoming, jel sad dobro!</h1>
          </div>
        )}

        {console.log(currentUser)}
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
