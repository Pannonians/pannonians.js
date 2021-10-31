/**
 * This is a JSONPlaceholder repository
 * https://jsonplaceholder.typicode.com/
 *
 * repository pattern
 * https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30
 */

import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;

const axios = require("axios").default;

export const getPosts = async () => {
  const { data } = await axios.get(POSTS_URL);
  return data;
};
