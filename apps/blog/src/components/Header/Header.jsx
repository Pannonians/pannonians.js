import React, { useRef } from "react";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../../firebase";
import authStore from "../../store/authStore";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";
import Navbar from "../Navbar/Navbar";

export default function Header() {
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

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header className="header">
      <div className="userProfile">
        {currentUser && currentUser.email && (
          <div className="profile">
            <button onClick={onClick} className="menu-trigger">
              <img
                src={currentUser.photoURL}
                alt="profile"
              />
            </button>
            <div
              ref={dropdownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}>
              <ul>
                <li style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '15px' }}>{currentUser.displayName}</li>
                <li style={{ textAlign: 'center', fontSize: '13px' }}>{currentUser.email}</li>
                <button onClick={logout} style={{ fontFamily: "Montserrat", marginLeft: "100px" }}>Sign out</button>
              </ul>
            </div>
          </div>
        )}
        {console.log(currentUser)}
      </div>

      <div className="logo">
        <img
          style={{ width: "400px" }}
          src="https://pannonians.com/Pannonians_Color_Full@0.1x.png"
        ></img>
      </div>

      <Navbar />
    </header>
  );
}