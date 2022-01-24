import React from "react";
import { NavLink } from "react-router-dom";
import  picMovies  from "../../img/picMovies.jpg"
import  picTv  from "../../img/picTV.jpg"


export default function Dashboard() {
  return (
    <div>
    <div className="navPics">
    
    
   
      <NavLink to="/movies"><img style={{width: "80%", borderRadius: "5%"}} alt={`Movies`} src= {picMovies}></img></NavLink>
      
      <NavLink to="/tvshows"><img style={{width: "80%", borderRadius: "5%"}} alt={`Tv Shows`} src={picTv}></img></NavLink>
    </div>
    <div className="sectionTags"><h1>MOVIES</h1><h1>TV SHOWS</h1></div>
    </div>
  );
}
