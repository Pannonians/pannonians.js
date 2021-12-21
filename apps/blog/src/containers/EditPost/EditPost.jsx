import React, { useState } from "react";
import { doc, updateDoc } from "@firebase/firestore";
import Firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

/**
 * @author
 * @function EditPost
 **/

const instance = Firebase.getInstance();
const db = instance.db;
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const EditPost = ({ postInfo }) => {
  const postId = postInfo.id;
  const postPost = postInfo.post;
  const postTitle = postInfo.title;
  const history = useHistory();

  const [title, setTitle] = useState(postInfo.title);
  const [post, setPost] = useState(postInfo.post);

  const routeChange = () => {
    let path = "/allPosts";
    history.push(path);
  };

  const updatePost = async (postId) => {
    const postDoc = doc(db, "posts", postId);
    const postChange = { post: post, title: title };
    await updateDoc(postDoc, postChange);
  };

  return (
    <>
      <div className="formContainer">
        <form className="form">
          <h1> Edit Post</h1>

          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            style={{ fontFamily: "Montserrat", backgroundColor: "white" }}
            modules={modules}
            theme="snow"
            onChange={setPost}
            type="text"
            name="post"
            placeholder="Post"
            value={post}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "120px",
            }}
          >
            <button
              className="medium-btn"
              type="submit"
              onSubmit={updatePost(postId, postPost, postTitle)}
            >
              Save
            </button>

            <button
              className="medium-btn"
              type="submit"
              onClick={routeChange}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditPost;
