import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import authStore from "./store/authStore";
import { useContext, useEffect, useState } from "react";
import Firebase from "./firebase";

import Login from "./containers/Login/Login.jsx";
import Dashboard from "./containers/Dashboard/Dashboard.jsx";
import Hero from "./components/Hero/Hero";
import Post from "./Post/Post.jsx";
import { useHistory } from "react-router-dom";
import Home from "./containers/Home/Home";
import PostForm from "./components/PostForm/PostForm.jsx";
import AllPostsFirestore from "./containers/AllPostsFirestore/AllPostsFirestore.jsx";
import { AllPosts } from "./containers/Home/AllPosts/AllPosts";

require("dotenv").config();

const { auth } = Firebase.getInstance();

function App() {
  const history = useHistory();

  const [isAuthenticated, setAuthentication] = useState(useContext(authStore));

  useEffect(() => {
    if (!isAuthenticated && history) {
      history.push("/");
    }
  }, [history, isAuthenticated]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setAuthentication(true) : setAuthentication(false);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">

    <authStore.Provider value={[isAuthenticated, setAuthentication]}>
      <Router>
        <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home" component={Home}>
            {/* <Dashboard /> */}
          </Route>
          <Route path="/post/:postId" component={Post}>
            {/* <Post /> */}
            </Route>
            
              <Route path="/postForm" component={PostForm}>
                </Route>
               <Route path="/allPosts">
                 <AllPostsFirestore />
               </Route>
               {/* <Route path="/post/:postId">

                 <EditPost />
                 </Route> */}
              <Route path="/">
                <Home />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        </div>
      </Router>
    </authStore.Provider>

    </div>
  );
}

export default App;
