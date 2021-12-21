import React, { useState } from "react";
import "./style.css";
import Firebase from "../../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import Hero from "../Hero/Hero";
import { useHistory } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { logEvent } from "@firebase/analytics";

/**
 * @author
 * @function PostForm
 **/

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instance = Firebase.getInstance();
    const database = instance.db;
    const analytics = instance.analytics;

    const docRef = await addDoc(collection(database, "posts"), {
      title: title,
      post: post,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setPost("");
    alert("Post is submitted successfully");

    logEvent(analytics, "create_post", {
      title: title,
    });
    history.push("/allPosts");
  };

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

  return (
    <>
      <Hero />
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <h1> Create Post</h1>

          <label style={{ width: "80%" }}>Title</label>
          <input
            style={{ width: "1500px" }}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            style={{ fontFamily: "Montserrat", backgroundColor: "white" }}
            modules={modules}
            theme="snow"
            onChange={setPost}
            placeholder="Content goes here..."
          />
          <button
            className="medium-btn"
            type="submit"
            style={{ "margin-left": "750px", "margin-top": "50px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default PostForm;
