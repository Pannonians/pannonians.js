import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero';
import {doc, updateDoc, setDoc, addDoc, collection} from '@firebase/firestore';
import Firebase from '../../firebase';

/**
* @author
* @function EditPost
**/


const instance = Firebase.getInstance();
const db = instance.db;

const EditPost = ({postInfo}) => {

const postId = postInfo.id
const postPost = postInfo.post
const postTitle = postInfo.title

console.log(postInfo)

const [title, setTitle] = useState(postInfo.title);
const [post, setPost] = useState(postInfo.post);


const updatePost = async (postId, postPost, postTitle) => {
    const postDoc = doc(db, "posts", postId)
    console.log(postDoc)
    const postChange = { post: post, title: title}
    console.log(postChange)

    await updateDoc(postDoc, postChange);

       
  }



    return(
    <><Hero /><div className="formContainer">

            <form className="form" onSubmit={updatePost(postId, postPost, postTitle)}>

                <h1> Edit Post</h1>

                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                                                                              
                     />

                <label>Post</label>
                <textarea 
                    type="text"
                    name="post"
                    placeholder="Post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}

                ></textarea>


                <button className ="medium-btn" type="submit" style={{"margin-left": '740px'}}>Save</button>

            </form>

            
        </div></>
       
   )
   
  }
 export default EditPost;