import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{JSON.stringify(posts)}</div>
      </header>
    </div>
  );
}

export default App;
