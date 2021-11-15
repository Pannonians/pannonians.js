import "../../App.css";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import Firebase from "../../firebase";
import authStore from "../../store/authStore";
import picture1 from "../../picture1.jpg"
import Hero from "../../components/Hero/Hero";
import Post from "../../Post/Post";
import Card from "../../UI/Card/Card";
import posts from "../../posts.json"



const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;

function App() {
  const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState(false);

  const getPosts = async () => {
    const { data } = await axios.get(POSTS_URL);
    
    setPosts(data);
   
  };
 
  // const destroyPost = async (id) => {
  //   const clean = await deletePost();
    
  // };

 

  // useEffect(() => {
  //   getPosts();
  // }, []);

  // const submitSearch = (e) =>{
  //   e.preventDefault();
  //   alert("Searched");
  // }

  // const openSearch = () =>{
  //   setSearch (true);
  // }

  // const searchClass = search ?'searchInput active': 'searchInput';

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
          {/* <a href="#">About Us</a>
          <a href="#">Posts</a>
          <a href="#">Contact Us</a> */}
          <div className="userInfo link">
            <a href="#">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </nav>
        {/* <form className="searchForm" onSubmit={submitSearch}>
        <div className="userInfo link">
            <input className={searchClass} type="text" placeholder="Search"/><i onClick={openSearch} className="fa fa-search searchIcon"></i>
          </div>
          </form> */}
        
        <div>
          {currentUser && currentUser.email && (
            <div className="headerUserInfo">
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
        {/* <div>
          <pre>
            <code>{JSON.stringify(posts, "", 2)}</code>
          </pre>
        </div> */}
      </header>

    <div>
      {/* <div className="posts">
        <img src={picture1}/>
      </div> */}
    
      <Hero />
      <Post />
      
      </div>        



    </div>
    
  );
}

export default App;