import React from 'react'
import { useState } from 'react';
import Firebase from '../../firebase';
import { query, collection, getDocs, doc, deleteDoc } from '@firebase/firestore';
import { useEffect } from 'react';
import { async } from '@firebase/app/node_modules/@firebase/util';
import picture3 from "../../pictures/Slika-3.jpg"
import Card from '../../UI/Card/Card';
import Hero from '../../components/Hero/Hero';

/**
* @author
* @function AllPostsFirestore
**/

const instance = Firebase.getInstance();
const db = instance.db;
const arrayPosts = [];

const AllPostsFirestore = (props) => {

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState()


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

  let postId;



  const deletePost = async (id) => {
  const postDocument = doc(db, "posts", id)
  await deleteDoc(postDocument);

  }

  
  


  useEffect(() => {

    handleAllPosts();


    // querySnapshot.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });

    // const snapDoc = await getDoc(docRef); 
  }, []);



  // console.log(posts)
  const displayPosts = posts.map(post => {
    console.log(post.id)
    return (
      <Card style={{ marginBottom: '20px' }}>

        <div className="postImageWrapper">
          <img src={picture3} alt="" />
        </div>
        <div>
          <h2 className="spanPosts">{post.title}</h2>
          <span>{post.post}</span><br></br>
          <button onClick={() => deletePost (post.id)} >Delete Post</button>
          <button >Edit post</button>
         
        </div>
      </Card>

    );
  })
  
  return (
    <><Hero />
      <div style={{ textAlign: 'center' }}>

        <h1>Posts</h1>
        {displayPosts}

      </div>
    </>


  )

};

export default AllPostsFirestore;