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

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { useHistory } from "react-router-dom";

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
    <authStore.Provider value={[isAuthenticated, setAuthentication]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </authStore.Provider>
  );
}

export default App;
