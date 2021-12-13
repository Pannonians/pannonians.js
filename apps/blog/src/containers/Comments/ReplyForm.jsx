import React, { useState } from "react";
import Firebase from "../../firebase";
import { doc, updateDoc, arrayUnion } from "@firebase/firestore";


const instance = Firebase.getInstance();
const database = instance.db;

export default function ReplyForm ( {commentId} ) {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [replyComm, setReplyComm] = useState("");
  
    // const [comments, setComments] = useState([])

// console.log(comments);
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

const handleSubmitReply = async ( replyComm, commentId) => {
    const commentRef = doc(database, "comments", commentId)
    console.log(commentRef)
    // const commentChange = [{}]
    // console.log(commentChange)

await updateDoc(commentRef, {
    comments: arrayUnion(replyComm)
});



    // await updateDoc(commentRef, commentChange);
    // history.push("/allPosts")
}


  return (
    <> 
    {openReplyForm ? (
    <div onSubmit={handleSubmitReply (replyComm, commentId)} >
        <div className="formGroup">
        <textarea 
        placeholder="Enter Reply..."
        value={replyComm}
        onChange={(e)=>setReplyComm( e.target.value)}
         ></textarea>
        {/* {console.log(replyComm)} */}
        </div>
        <div className="formGroup">
        <button  type="submit">Reply</button>
        <button onClick={() => setOpenReplyForm(false)} type="button">Cancel</button>
        </div>
    </div>
    
    ) : (
      <button onClick={() => setOpenReplyForm(true)} type="submit">Reply</button> )}
      
    </>
  );
}
//   const displayComments = comments.comments.map((comment) => {
//     return (
             
//         <div>
//           <form className= "commentForm" >
//           <h className="spanPosts">{comment.text}</h>
//           </form>
//         </div>

//     );
//   });
// return (
//   <div style={{ textAlign: "center", fontFamily: "Montserrat"}}>
//         <h1>Comments</h1>

//         {displayComments}
//       </div>
  
//   );

