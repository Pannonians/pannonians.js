import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tvshows">TV Shows</NavLink>
    </div>
  );
}
