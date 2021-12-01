import React, { useState } from 'react'
import "./style.css"
import Firebase from '../../firebase'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import Hero from '../Hero/Hero'
import { useHistory } from "react-router-dom";





/**
* @author
* @function PostForm
**/

const PostForm = (props) => {

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)

        const instance = Firebase.getInstance();
        const database = instance.db;
        const docRef = await addDoc(collection(database, "posts"), {
            title: title,
            post: post,
            createdAt: serverTimestamp()
        })
        console.log()
        setTitle("");
        setPost("");
        alert("Post is submitted successfully")
        history.push("/allPosts")
        
        
    }
    



    return (

        <><Hero /><div className="formContainer">

            <form className="form" onSubmit={handleSubmit} >

                <h1> Create Post</h1>

                <label>Title</label>
                <input placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
               

                <label>Post</label>
                <textarea placeholder="Post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}

                ></textarea>


                <button className ="medium-btn" type="submit" style={{"margin-left": '740px'}}>Submit</button>
            

            </form>
        </div></>
    )
}
export default PostForm;