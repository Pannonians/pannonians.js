import React from 'react'
import { useState } from 'react';
import Firebase from '../../firebase';
import { query, collection, getDocs, doc, deleteDoc, updateDoc, setDoc, getDoc } from '@firebase/firestore';
import { useEffect } from 'react';
import { async } from '@firebase/app/node_modules/@firebase/util';
import picture3 from "../../pictures/Slika-3.jpg"
import Card from '../../UI/Card/Card';
import Hero from '../../components/Hero/Hero';
import { NavLink } from 'react-router-dom';
import EditPost from '../EditPost/EditPost';
import { Modal } from 'react-bootstrap';

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


  const handleShow = (post) => {
    setPost(post)
    setShow(true);
  }



  const handleAllPosts = async (e) => {

    const queryPosts = query(collection(db, "posts"));
    const querySnapshot = await getDocs(queryPosts);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().title);
      let document = doc.data()
      document.id = doc.id;
      arrayPosts.push(document)

    })
    setPosts(arrayPosts);
    console.log(arrayPosts)
  }


  const handlePost = async (id) => {


    const queryPost = doc(db, "posts", id)
    console.log(queryPost);
    const querySnapshot = await getDoc(queryPost);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().title);
      let document = doc.data()
      document.id = doc.id;
      arrayForOnePost.push(document)

    })
    setPost(arrayForOnePost);
    console.log(arrayForOnePost)
  }


  const updatePost = async (id, title, post) => {
    const postDoc = doc(db, "posts", id)
    console.log(postDoc)
    const postChange = { post: "da li sada radi" }
    console.log(postChange)

    await updateDoc(postDoc, postChange).catch(() => setDoc(postDoc, postChange));
  }



  const deletePost = async (id) => {
    const postDocument = doc(db, "posts", id)
    await deleteDoc(postDocument);

  }



  useEffect(() => {

    handleAllPosts();

  }, []);



  console.log(posts)
  const displayPosts = posts.map(post => {

    return (

      <Card style={{ marginBottom: '20px' }}>

        <div className="postImageWrapper">
          <img src={picture3} alt="" />
        </div>
        <div>
          <h2 className="spanPosts">{post.title}</h2>
          <span>{post.post}</span><br></br>

          <button onClick={() => deletePost(post.id)
            .then(() => { window.location.reload() })
          } >Delete Post</button>


          <button onClick={() => handleShow(post)}>Edit</button>

            {/* <NavLink key={post.id} to={`/post/${post.id}`}>
             <button onClick={() => handlePost (posts.id)}>Edit Post</button>
              </NavLink> */}
            {/* <button onClick={() => {updatePost (post.id, post.post, post.title)
            .then(() => {window.location.reload()})
             }}>Edit post</button> */}

        </div>

      </Card>


    );
  })
  console.log(displayPosts)


  return (


    <><Hero />

      <Modal show={show} >

        <EditPost postInfo={post} />

      </Modal>

      <div style={{ textAlign: 'center' }}>

        <h1>Posts</h1>
        {displayPosts}

      </div>
    </>

  )

};

export default AllPostsFirestore;