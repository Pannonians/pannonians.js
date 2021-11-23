import React from 'react';
import Card from '../../UI/Card/Card';
import "./style.css"
import postImage1 from "../../postImage1.jpg";
import blogPost from "../../posts.json"
import { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

     console.log(props)

    const [post, setPost] = useState({});
    const [postId, setPostId] = useState("");

     useEffect(() => {
        const postId = props.match?.params.postId
        const post = !postId ? blogPost.data[0] : blogPost.data.find(post =>  post.id == postId);

    
        setPost(post);
        setPostId(postId);

        console.log(post)
     }, [post, props]);


    return (
        <div className="blogPostContainer">
             {/* <Hero style={{"margin-bottom": '50px'}}/> */}
            <Card>
              
                <div className="blogHeader">
                    <h2 className="postTitle">{post.title}</h2>

                </div>

                <div className="postImageContainer">
                    <img src={postImage1} alt="PostImage" />
                </div>

                <div className="postContent">
                    {/* <h3>Post title</h3>
    <p>Lorem ipsum</p> */}
                    <span className="blogCategory">{post.body}</span>
                </div>
            </Card>
        </div>
    )
}


export default BlogPost