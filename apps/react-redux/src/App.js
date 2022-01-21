import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/features/Dashboard/Dashboard";
import Movies from "../src/features/Movies/Movies.jsx";
import TvShows from "../src/features/TV Shows/TvShows.jsx";
import Header from "./features/Dashboard/Header.jsx";
import Footer from "../src/features/Dashboard/Footer.jsx";
import "./App.css";
import axios from "axios";
import Genres from "./features/Genres/genres";

require("dotenv").config();

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
