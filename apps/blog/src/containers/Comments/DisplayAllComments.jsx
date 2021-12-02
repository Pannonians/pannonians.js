import React from "react";
import { useState, useEffect } from "react";
import Firebase from "../../firebase";
import { query, collection, getDocs, where, orderBy } from "@firebase/firestore";
import SimpleDateTime from "react-simple-timestamp-to-date";


const AllCommentsFirestore = ({postId, createdAt}) => {
  const [comments, setComments] = useState([]);
  
  const handleAllComments = async (e) => {
    const instance = Firebase.getInstance();
    const db = instance.db;

    const queryComments = query(collection(db, "comments"), where ("postId", "==", postId), orderBy("createdAt", "desc"))

    const querySnapshot = await getDocs(queryComments);
    const arrayComments = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().text);
      let document = doc.data();
      document.id = doc.id;
      arrayComments.push(document);
    });

    setComments(arrayComments);
    console.log(arrayComments)
  };
  

  useEffect(() => {
    handleAllComments();
  }, []);

  console.log(comments);
  const displayComments = comments.map((comment) => {
    return (
     
        
        <div>
          <h2 className="spanPosts">{comment.text}</h2>
          <span>{comment.comment}</span>

          <br></br>

          <span><SimpleDateTime dateSeparator="." timeSeparator=":" dateFormat="DMY" showTime="0">{comment.createdAt.seconds}</SimpleDateTime></span>

          <br></br>
          {console.log("comment.createdAt", comment.createdAt.seconds)}
        </div>
   
    );
  });

  return (
    <>
      <div style={{ textAlign: "center"}}>
        <h1>Comments</h1>

        {displayComments}
      </div>
    </>
  );
};

export default AllCommentsFirestore;

