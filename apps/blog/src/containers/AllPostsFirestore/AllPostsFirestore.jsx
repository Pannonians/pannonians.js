import React from "react";
import { useState } from "react";
import Firebase from "../../firebase";
import { query, collection, getDocs, doc } from "@firebase/firestore";
import { useEffect } from "react";
import { async } from "@firebase/app/node_modules/@firebase/util";
import picture3 from "../../pictures/Slika-3.jpg";
import Card from "../../UI/Card/Card";
import Hero from "../../components/Hero/Hero";
import CommentForm from "../Comments/CommentForm";
import AllCommentsFirestore from "../Comments/DisplayAllComments";

/**
 * @author
 * @function AllPostsFirestore
 **/

const AllPostsFirestore = (props) => {
  const [posts, setPosts] = useState([]);

  const handleAllPosts = async (e) => {
    const instance = Firebase.getInstance();
    const db = instance.db;
    // const docRef = doc(db, "posts", "3p2qrmWsfF49ZB03rB8u");

    const queryPosts = query(collection(db, "posts"));

    const querySnapshot = await getDocs(queryPosts);
    const arrayPosts = [];
    

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().title);
      let document = doc.data();
      document.id = doc.id;
      arrayPosts.push(document);
    });

    setPosts(arrayPosts);
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  console.log(posts);
  const displayPosts = posts.map((post) => {
    return (
      <Card style={{ marginBottom: "5px" }}>
        <div className="postImageWrapper">
          <img src={picture3} alt="" />
        </div>
        <div>
          <h2 className="spanPosts">{post.title}</h2>
          <span>{post.post}</span>
          <br></br>
          <button>Delete Post </button>
          <button>Edit post</button>
        <div>  
          <CommentForm postId={post.id}/>
          <div className="comment-right-part">
          
        
          <AllCommentsFirestore postId={post.id}/> 
          </div>
        </div>
        </div>
      </Card>
    );
  });

  return (
    <>
      <Hero />
      <div style={{ textAlign: "center" }}>
        <h1>Posts</h1>
        
        {displayPosts}
       
      </div>
    </>
  );
};

export default AllPostsFirestore;
