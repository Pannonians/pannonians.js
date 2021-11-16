import React from 'react'
import './style.css';
import Card from '../UI/Card/Card';
import BlogPost from '../components/BlogPost/BlogPost';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';



/**
* @author
* @function Post
**/


const Post = (props) => {
 
  console.log(props)

//   const mapPost = posts.data.map(postsId => postsId.id)
// console.log(mapPost);
  
  return(
    <section className="container margin">

     
      <BlogPost {...props} />
      <Sidebar {...props}/>
      
   
    </section>
   );
  
    }

  export default Post;
