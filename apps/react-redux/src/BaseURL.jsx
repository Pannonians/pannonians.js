import axios from "axios";

require("dotenv").config();

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie", 
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`}
});