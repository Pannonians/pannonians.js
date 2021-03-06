import React, { useState } from "react";
import Firebase from "../../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { logEvent } from "@firebase/analytics";

const instance = Firebase.getInstance();

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const database = instance.db;
    const analytics = instance.analytics;

    const commRef = await addDoc(collection(database, "comments"), {
      text: text,
      postId: postId,
      comments: null,
      createdAt: serverTimestamp(),
    // }).then(() => {
    //   window.location.assign("/allPosts");
    });

    logEvent(analytics, "comment_post", {
      text: text,
    });

    setText("");
    alert("Comment is submitted successfuly");

    logEvent(analytics, "comment_post", {
      text: text,
    });
  };

  return (
    <div>
      <br />

      <form
        style={{ display: "flex", width: "60%", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            width: "100%",
            borderRadius: "5px",
            paddingLeft: "20px",
            borderWidth: "thin",
            fontFamily: "Montserrat",
          }}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="write comment"
        />
        <br />
        <button
          style={{ width: "20%", height: "50px", fontFamily: "Montserrat" }}
        >
          Post comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
