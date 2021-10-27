import * as jsonplaceholder from "./jsonplaceholder";
const SOURCE = {
  jsonplaceholder,
};

const API_SOURCE_ENUM = {
  jsonplaceholder: "jsonplaceholder",
  firebase: "firebase",
};

const API_SOURCE = API_SOURCE_ENUM.jsonplaceholder;

export const getPosts = SOURCE[API_SOURCE]["getPosts"];
