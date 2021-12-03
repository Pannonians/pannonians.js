import React from 'react'
import "./style.css";
import Card from '../../../UI/Card/Card';
import pictures4 from "../../../pictures/picture4.jpg"
import picture3 from "../../../pictures/Slika-3.jpg"
import Firebase from '../../../firebase';
import { query, collection, getDocs, orderBy, where } from 'firebase/firestore'
import { useState, useEffect } from 'react';


/**
* @author
* @function AllPosts
**/






export const AllPosts = (props) => {

  const [posts, setPosts] = useState([]);
  const instance = Firebase.getInstance();
  const db = instance.db;
  const arrayPosts = [];

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
    console.log("arrayPosts", arrayPosts)
    setPosts(arrayPosts);
    // console.log(arrayPosts);
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

if (posts == [] ) {
return null
}
  return posts.map((post) => (
  
      <div style={props.style}>
        <Card style={{ marginBottom: '20px' }}>
          <div className="postImageWrapper">
            <img src={pictures4} alt="" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2>{post.title}</h2>

            <span>{post.post}</span><br></br>
            <span>{post.createdAt.seconds}</span><br></br>
 
            <button>Read More</button>
          </div>


        </Card>

        <Card style={{ marginBottom: '20px' }}>
          <div className="postImageWrapper">
            <img src={picture3} alt="" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>

            <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
              totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>

            <button>Read More</button>
          </div>


        </Card>


        <Card style={{ marginBottom: '20px' }}>
          <div className="postImageWrapper">
            <img src="https://images.unsplash.com/photo-1587955415524-bb264e518428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>

            <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
              totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>

            <button>Read More</button>
          </div>


        </Card>

      </div>
    )

    // eslint-disable-next-line no-unreachable
   
  )



}
export default AllPosts;