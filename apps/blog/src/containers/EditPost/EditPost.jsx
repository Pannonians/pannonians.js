import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import {
  doc,
  updateDoc,
  setDoc,
  addDoc,
  collection,
} from "@firebase/firestore";
import { useHistory } from "react-router-dom";
import Firebase from "../../firebase";
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
  
 

   

  console.log(postInfo);

  const [title, setTitle] = useState(postInfo.title);
  const [post, setPost] = useState(postInfo.post);
  const history = useHistory();

  const routeChange = () => {
    let path = "/allPosts";
    history.push(path);
  };

  const updatePost = async (postId, postPost, postTitle) => {
    const postDoc = doc(db, "posts", postId);
    console.log(postDoc);
    const postChange = { post: post, title: title };
    console.log(postChange);

    

    await updateDoc(postDoc, postChange);

   

    
  };

  return (
    <>
      <div className="formContainer">
        <form
          className="form"
          
        >
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
              // style={{ "margin-top": '150px', width:"50%"}}
            >
              Save
            </button>

            <button
              className="medium-btn"
              type="submit"
              // style={{marginLeft: '200px', width:"50%" }}
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
