import React, { useState } from "react";
import Firebase from "../../firebase";
import { addDoc, collection, query, getDocs, serverTimestamp } from "@firebase/firestore";




export default function ReplyForm ({ postId, commentId }) {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [reply, setReply] = useState("");

    const handleSubmitReply = async (e) => {
    e.preventDefault();
    const instance = Firebase.getInstance();
    const database = instance.db;
    const commRef = await addDoc(collection(database, "comments"), {
      postId: postId,
      reply: reply,
      commentId: commentId,
      createdAt: serverTimestamp()
    })
    // .then (() => {
    //   window.location.assign("/allPosts")
    // }) ;

    setReply("");
    alert("Reply is submitted successfuly");
    console.log(commRef);
    console.log(e);
  };


  return (
    <> 
    {openReplyForm ? (
    <div onSubmit={handleSubmitReply}>
        <div className="formGroup">
        <textarea 
        placeholder="Enter Reply..."
        value={reply}
        onChange={(e)=>setReply(e.target.value)}></textarea>
        </div>
        <div className="formGroup">
        <button type="submit">Reply</button>
        <button onClick={() => setOpenReplyForm(false)} type="button">Cancel</button>
        </div>
    </div>
    
    ) : (
      <button onClick={() => setOpenReplyForm(true)} type="button">Reply</button> )}
    </>
  );
}
