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

export const getPosts = async () => {
  const { data } = await axios.get(POSTS_URL);
  return data;
};

export const postShow = async (id) => {
  const { data } = await axios.get(`${POSTS_URL}/${id}`);
  return data;
};

export const postCreate = async (requestBody) => {
  const { data } = await axios.post(POSTS_URL, requestBody);
  return data;
};

export const postUpdate = async (id, requestBody) => {
  const { data } = await axios.patch(`${POSTS_URL}/${id}`, requestBody);
  return data;
};

export const deletePost = async (id) => {
  await axios.delete(`${POSTS_URL}/${id}`);
};
