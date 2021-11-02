import "../App.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../firebase";
import authStore from "../store/authStore";
import { getPosts, postShow, postCreate, postUpdate } from "../API";
import { deletePost } from "../API/jsonplaceholder"



function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(false);
  // const [newPost, setNewPost] = useState("")

  const fetchPosts = async () => {
    const data = await getPosts();
    console.log("data", data);
    const singlePost = await postShow(1);
    console.log("singlePost", singlePost);
    const newPost = await postCreate();
    console.log("newPost", newPost);
    const editPost = await postUpdate(1, {"title": "tijana"});
    console.log("editPost", editPost);
    setPosts(data);
  };
 
  const destroyPost = async (id) => {
    const clean = await deletePost();
    console.log("clean", clean);
    
  };

 

  useEffect(() => {
    fetchPosts();
    destroyPost();
    
  }, []);

 


  const submitSearch = (e) =>{
    e.preventDefault();
    alert("Searched");
  }

  const openSearch = () =>{
    setSearch (true);
  }

  const searchClass = search ?'searchInput active': 'searchInput';

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
        </header>
        
    <div className="App App-header">
      <header className="App-header">
        <nav className="headerMenu">
          <a href="#">About Us</a>
          <a href="#">Posts</a>
          <a href="#">Contact Us</a>
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
        <form className="searchForm" onSubmit={submitSearch}>
        <div className="userInfo link">
            <input className={searchClass} type="text" placeholder="Search"/><i onClick={openSearch} className="fa fa-search searchIcon"></i>
          </div>
          </form>
        
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
        <div>
          <pre>
            <code>{JSON.stringify(posts, "", 2)}</code>
          </pre>
        </div>
      </header>
    </div>
    </div>
    
  );
}

export default App;
