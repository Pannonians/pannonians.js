import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/features/Dashboard/Dashboard";
import Movies from "../src/features/Movies/Movies.jsx";
import TvShows from "../src/features/TV Shows/TvShows.jsx";
import Header from "./features/Dashboard/Header.jsx";
import Footer from "../src/features/Dashboard/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
