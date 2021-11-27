/**
 * This is adapter pattern
 * https://en.wikipedia.org/wiki/Adapter_pattern#:~:text=In%20software%20engineering%2C%20the%20adapter,be%20used%20as%20another%20interface.
 */

import * as jsonplaceholder from "./jsonplaceholder";


// Please replace this with the actual integration
// just like with the import on line 1
const firebase = {
  getPosts: () => ["post1", "post2"],
};

// const file = {
//   getPosts: () => ["post1"]
// };



const SOURCE = {
  jsonplaceholder,
  firebase,
  // file
};

const API_SOURCE_ENUM = {
  jsonplaceholder: "jsonplaceholder",
  firebase: "firebase",
  // file: "file"
};

// This controlls where we get our data, what's the source
// if you want firebase, just replace the ".placeholder" with ".firebase"

// const API_SOURCE = API_SOURCE_ENUM.jsonplaceholder;
const API_SOURCE = API_SOURCE_ENUM.firebase;
// const API_SOURCE = API_SOURCE_ENUM.file;


// make a schema here of the exports.
// every function must have exact same name in the
// repository exports
export const getPosts = SOURCE[API_SOURCE]["getPosts"];
export const deletePost = SOURCE[API_SOURCE]["deletePost"];
export const postShow = SOURCE[API_SOURCE]["postShow"];
export const postCreate = SOURCE[API_SOURCE]["postCreate"];
// export const postCreateFile = SOURCE[API_SOURCE]["postCreateFile"];
export const postUpdate = SOURCE[API_SOURCE]["postUpdate"];
