import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;

export const getPosts = async () => {
  const { data } = await axios.get(POSTS_URL);
  return data;
};
