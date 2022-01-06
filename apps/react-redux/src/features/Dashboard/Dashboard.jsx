import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { movie } from '../../api'

export default function Dashboard() {
  useEffect(() => {
    const getMovies = async () => {
      const {url} = movie.get.discover
      const response = await axios.get(url);

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
