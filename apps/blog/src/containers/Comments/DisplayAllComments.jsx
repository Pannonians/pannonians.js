import React from "react";
import { useState, useEffect } from "react";
import Firebase from "../../firebase";
import { query, collection, getDocs, where } from "@firebase/firestore";
import "../Comments/style.css"


const AllCommentsFirestore = ({postId}) => {
  const [comments, setComments] = useState([]);
  
  const handleAllComments = async (e) => {
    const instance = Firebase.getInstance();
    const db = instance.db;

    const queryComments = query(collection(db, "comments"), where ("postId", "==", postId))

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
          <form className= "commentForm" >
          <h className="spanPosts">{comment.text}</h>
          <span>{comment.comment}</span>
          <br></br>
          </form>
        </div>
    
    );
  });

  return (
    <>
      <div style={{ textAlign: "center", fontFamily: "Montserrat"}}>
        <h1>Comments</h1>

        {displayComments}
      </div>
    </>
  );
};

export default AllCommentsFirestore;

