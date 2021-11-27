import React from 'react'
import './style.css';
import Card from '../UI/Card/Card';
import BlogPost from '../components/BlogPost/BlogPost';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import AllPostsFirestore from '../containers/AllPostsFirestore/AllPostsFirestore';
import Firebase from '../firebase';
import { addDoc, collection, doc, setDoc, updateDoc } from '@firebase/firestore';
import { useState } from 'react';



/**
* @author
* @function Post
**/


const instance = Firebase.getInstance();
const db = instance.db;
const arrayPosts = [];

const Post = (props) => {

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    const updatePost = async (id, title, post) => {
        const postDoc = doc(db, "posts", id)
        console.log(postDoc)
        const postChange = {post: "edit me"}
        console.log(postChange)
    
        await updateDoc(postDoc, postChange).catch(() => setDoc(postDoc, postChange));
      }



  return (
    <Card style={{ "background-color": 'rgb(188, 211, 204)' }}>
      <section className="container margin">

        {/* <BlogPost {...props} />
        <Sidebar {...props} /> */}

        <div className="formContainer">
        <AllPostsFirestore />

          <form className="form" onSubmit={updatePost}>
        
            <h1> Edit Post</h1>

            <label>Title</label>
            <input placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />

            <label>Post</label>
            <textarea placeholder="Post"
              value={post}
              onChange={(e) => setPost(e.target.value)}

            ></textarea>


            <button className="medium-btn" type="submit" style={{ "margin-left": '740px' }}>Submit</button>

          </form>
        </div>


        

      </section>
    </Card>

  );

}

export default Post;
