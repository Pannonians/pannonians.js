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





  return (
    <Card style={{ "background-color": 'rgb(188, 211, 204)' }}>
      <section className="container margin">

        <BlogPost {...props} />
        <Sidebar {...props} />

      </section>
    </Card>

  );

}

export default Post;
