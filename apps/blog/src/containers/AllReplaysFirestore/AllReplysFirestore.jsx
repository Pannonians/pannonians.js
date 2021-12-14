import React from "react";
import { useState, useEffect } from "react";
import Firebase from "../../firebase";
import {collection, where, orderBy, query, getDocs} from "@firebase/firestore";

/**
 * @author
 * @function AllReplaysFirestore
 **/

export const AllReplaysFirestore = ({ commentId }) => {
  const [comments, setComments] = useState([]);
  console.log(commentId)

  const handleAllComments = async (e) => {
    const instance = Firebase.getInstance();
    const db = instance.db;

    const queryComments = query(
      collection(db, "comments", commentId),
    //   where("id", "==", commentId),
    //   orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(queryComments);
    const arrayComments = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().id);
      let document = doc.data();
      document.id = doc.id;
      arrayComments.push(document);
    });

    setComments(arrayComments);
    console.log(arrayComments);
  };

  useEffect(() => {
    handleAllComments();
  }, []);



const displayReplies = comments.map((comment) => {

return (
 <div>{comment.comments.map((reply) => {
     return <div>{console.log(reply)}</div>
     
 })}</div>
)
})
  return (

      <div>
      <h2>Replies</h2>
      {displayReplies}
     </div>
      
        )
};
 export default AllReplaysFirestore; 