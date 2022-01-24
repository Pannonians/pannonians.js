import React from 'react'
import { NavLink } from 'react-router-dom';
import clapperboard24 from "../Dashboard/img/clapperboard24.png"

export const Header = () => {
    return (
        <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand text-white text-lg brand-text">
              Movies and TV Shows Application
            </NavLink>
          </div>
          <img src={clapperboard24} alt='clappeboard'></img>
          
        </div>
      </nav>
    </div>
    )
};

export default Header;
