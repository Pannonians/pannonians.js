import React from "react";
import { Fragment, useState } from "react";
import Firebase from "../../firebase";
import {
  query,
  collection,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  orderBy,
  writeBatch,
  where
} from "@firebase/firestore";
import { useEffect } from "react";
import picture3 from "../../pictures/Slika-3.jpg";
import Card from "../../UI/Card/Card";
import Hero from "../../components/Hero/Hero";
import { NavLink, useHistory } from "react-router-dom";
import EditPost from "../EditPost/EditPost";
import { Modal } from "react-bootstrap";
import CommentForm from "../Comments/CommentForm";
import AllCommentsFirestore from "../Comments/AllCommentsFirestore";

import "../AllPostsFirestore/style.css"
import ReactQuill from "react-quill";

import SimpleDateTime from "react-simple-timestamp-to-date";
import ReplyForm from "../Comments/ReplyForm";



/**
 * @author
 * @function AllPostsFirestore
 **/

const instance = Firebase.getInstance();
const db = instance.db;
const arrayPosts = [];
const arrayForOnePost = [];


const AllPostsFirestore = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleShow = (post) => {
    setPost(post);
    setShow(true);
  };

  const handleAllPosts = async (e) => {
    const queryPosts = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(queryPosts);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().title);
      let document = doc.data();
      document.id = doc.id;
      arrayPosts.push(document);

      console.log(doc.timestamp);
    });
    setPosts(arrayPosts);
    // console.log(arrayPosts);
  };

  
    const deletePost = async (id) => {
     const postDocument = doc(db, "posts", id);
    await deleteDoc(postDocument);
  
  };



  useEffect(() => {
    handleAllPosts();
  }, []);

  console.log(posts);
  const displayPosts = posts.map((post) => {
    return (
      <Card style={{ marginBottom: "20px", width:"80%", margin:"auto" }}>
        <div className="postImageWrapper">
          <img src={picture3} alt="" />
        </div>
        <div>
          <h2 className="spanPosts">{post.title}</h2>
          
          <span dangerouslySetInnerHTML={{ __html: post.post} } />
          
          <br></br>

          <span><SimpleDateTime dateSeparator="." timeSeparator=":" dateFormat="DMY" showTime="0">{post.createdAt.seconds}</SimpleDateTime></span>
          <br></br>
       {console.log("post.createdAt", post.createdAt)}

          

          <button
            onClick={() =>
              deletePost(post.id).then(async() => {
                
                const queryComments = query(collection(db, "comments"), where("postId", "==", post.id));
                const querySnapshotComments = await getDocs(queryComments)
                const batch = writeBatch(db);

                querySnapshotComments.forEach((doc) => {
                  batch.delete(doc.ref);
                });
                await batch.commit();
                window.location.reload();
               
              })
              
             
            }
           
          >
            Delete
          </button>

          <button onClick={() => handleShow(post)}>Edit</button>
          

          {/* <NavLink key={post.id} to={`/post/${post.id}`}>
   <button onClick={() => handlePost (posts.id)}>Edit Post</button>
    </NavLink> */}
          {/* <button onClick={() => {updatePost (post.id, post.post, post.title)
  .then(() => {window.location.reload()})
   }}>Edit post</button> */}
        </div>
        <div>
          <CommentForm postId={post.id} />
          <div className="comment-right-part">
            <AllCommentsFirestore postId={post.id} />
            {/* <ReplyForm /> */}
          </div>
        </div>
      </Card>
    );
  });
 

  return (
    <>
      <Hero  />

      <Modal show={show} >
        <EditPost postInfo={post} />
      </Modal>

      <div style={{ textAlign: "center", fontFamily: "Montserrat"}}>
        <h1>Posts</h1>
        {displayPosts}
      </div>
    </>
  );
};

export default AllPostsFirestore;
