import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import BaseURL from "../../BaseURL";

require("dotenv").config();

export default function Dashboard() {
  useEffect(() => {
    const getMovies = async () => {
      const response = await BaseURL.get();

      console.log("response", response);
    };

    getMovies();
  }, []);

  return (
    <div>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tvshows">TV Shows</NavLink>
    </div>
  );
}
