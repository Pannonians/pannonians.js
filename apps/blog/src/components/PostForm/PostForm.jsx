import React, { useState } from 'react'
import "./style.css"
import Firebase from '../../firebase'
import { doc, setDoc, addDoc, collection } from '@firebase/firestore'
import Hero from '../Hero/Hero'




/**
* @author
* @function PostForm
**/

const PostForm = (props) => {

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const instance = Firebase.getInstance();
        // console.log(instance)
        // const CollDatabase = instance.collectionDb;
        // console.log(CollDatabase)
        const database = instance.db;
        const docRef = await addDoc(collection(database, "posts"), {
            title: title,
            post: post
        })

        setTitle("");
        setPost("");
        alert("Post is submitted successfuly")
        console.log(docRef)



    }




    return (

        <><Hero /><div className="formContainer">

            <form className="form" onSubmit={handleSubmit}>

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