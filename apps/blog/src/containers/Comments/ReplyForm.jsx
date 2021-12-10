import React, { useState } from "react";
import Firebase from "../../firebase";
import { doc, updateDoc } from "@firebase/firestore";


const instance = Firebase.getInstance();
const database = instance.db;

export default function ReplyForm ( reply ) {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [replyComm, setReplyComm] = useState("");
console.log(reply);
    // const handleSubmitReply = async (e) => {
    // e.preventDefault();
    
//     const commRef = await addDoc(collection(database, "comments"), {
//     //   postId: postId,
//       reply: reply,
//       commentId: comment,
//       createdAt: serverTimestamp()
//     })
//     // .then (() => {
//     //   window.location.assign("/allPosts")
//     // }) ;

//     setReply("");
//     alert("Reply is submitted successfuly");
//     console.log(commRef);
//     console.log(e);
//   };

const handleSubmitReply = async ( comment, reply ) => {
    const replyDoc = doc(database, "comments", comment)
    console.log(replyDoc)
    const commentChange = { reply: reply }
    console.log(commentChange)

    await updateDoc(replyDoc, commentChange);
    // history.push("/allPosts")
}


  return (
    <> 
    {openReplyForm ? (
    <div onSubmit={handleSubmitReply ( reply)} >
        <div className="formGroup">
        <textarea 
        placeholder="Enter Reply..."
        value={replyComm}
        onChange={(e)=>setReplyComm(e.target.value)}></textarea>
        </div>
        <div className="formGroup">
        <button  type="submit">Reply</button>
        <button onClick={() => setOpenReplyForm(false)} type="button">Cancel</button>
        </div>
    </div>
    
    ) : (
      <button onClick={() => setOpenReplyForm(true)} type="button">Reply</button> )}
    </>
  );
}
