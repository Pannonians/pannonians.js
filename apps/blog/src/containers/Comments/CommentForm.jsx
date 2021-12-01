import React, { useState } from "react";
import Firebase from "../../firebase";
import { addDoc, collection, query, getDocs } from "@firebase/firestore";


const instance = Firebase.getInstance();

const CommentForm = ({ postId }) => {
  
  const [text, setText] = useState("");
  console.log(postId);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const instance = Firebase.getInstance();
    const database = instance.db;
    const commRef = await addDoc(collection(database, "comments"), {
      text: text,
      postId: postId
    })
    .then (() => {
      window.location.assign("/allPosts")
    }) ;

    setText("");
    alert("Comment is submitted successfuly");
    console.log(commRef);
    console.log(e);
  };

  return (
    <div>
      <br />

      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="write comment"
        />

        <br />
        <button style={{ width: "20%", height: "50px" }}>Post comment</button>
      </form>
    </div>
  );
};

export default CommentForm;


