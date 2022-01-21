import React from "react";
import { NavLink } from "react-router-dom";
import  picMovies  from "../../img/picMovies.jpg"
import  picTv  from "../../img/picTV.jpg"
import Genres from "../Genres/Genres"


export default function Dashboard() {
  return (
    <div>
    <div className="navPics">
    
    
   
      <NavLink to="/movies"><img style={{width: "80%", borderRadius: "5%"}} src= {picMovies}></img></NavLink>
      
      <NavLink to="/tvshows"><img style={{width: "80%", borderRadius: "5%"}} src={picTv}></img></NavLink>
    </div>
    <Genres />
    <div className="sectionTags"><h1>MOVIES</h1><h1>TV SHOWS</h1></div>
    </div>
  );
}
