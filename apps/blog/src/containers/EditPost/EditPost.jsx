import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import {
  doc,
  updateDoc,
  setDoc,
  addDoc,
  collection,
} from "@firebase/firestore";
import Firebase from "../../firebase";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

/**
 * @author
 * @function EditPost
 **/

const instance = Firebase.getInstance();
const db = instance.db;

const EditPost = ({ postInfo }) => {
  const postId = postInfo.id;
  const postPost = postInfo.post;
  const postTitle = postInfo.title;

  console.log(postInfo);

  const [title, setTitle] = useState(postInfo.title);
  const [post, setPost] = useState(postInfo.post);

  const updatePost = async (postId, postPost, postTitle) => {
    const postDoc = doc(db, "posts", postId);
    console.log(postDoc);
    const postChange = { post: post, title: title };
    console.log(postChange);

    await updateDoc(postDoc, postChange);
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
        <form
          className="form"
          onSubmit={updatePost(postId, postPost, postTitle)}
        >
          <h1> Edit Post</h1>

          <label>Title</label>
          <input style={{fontFamily:"Montserrat", backgroundColor:"white", width: "80%", margin: "auto"}}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          
          <ReactQuill style={{fontFamily:"Montserrat", backgroundColor:"white", width: "80%", margin: "auto"}}
            
            modules={modules}
            theme="snow"
            type="text"
            name="post"
            placeholder="Post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />

          <button
            className="medium-btn"
            type="submit"
            style={{ "margin-left": "740px" }}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};
export default EditPost;
