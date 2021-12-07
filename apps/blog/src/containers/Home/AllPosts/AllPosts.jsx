import React from 'react'
import "./style.css";
import Card from '../../../UI/Card/Card';
import pictures4 from "../../../pictures/picture4.jpg"
import picture3 from "../../../pictures/Slika-3.jpg"
import Firebase from '../../../firebase';
import { query, collection, getDocs, orderBy, where } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { ReadMore } from '../../../components/ReadMore/ReadMore';
import InfiniteScroll from 'react-infinite-scroll-component';
import refresh from 'react-infinite-scroll-component'


/**
* @author
* @function AllPosts
**/






export const AllPosts = (props) => {

  var postsPerPage = 3;
  const [posts, setPosts] = useState([...Array(postsPerPage).keys()]);
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

  if (posts == []) {
    return null
  }
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={handleAllPosts}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    
    >
      {posts.map((post) => (


        <div style={props.style}>
          <Card style={{ marginBottom: '20px' }}>
            <div className="postImageWrapper">
              <img src={pictures4} alt="" />
            </div>

            <div style={{ textAlign: 'center' }}>

              <h2>{post.title}</h2>

              <ReadMore textPost={post.post}>
                {/* <ReadMore> */}
                <span dangerouslySetInnerHTML={{ __html: post.post }} />
              </ReadMore>
              <span><SimpleDateTime dateSeparator="." timeSeparator=":" dateFormat="DMY" showTime="0">{post.createdAt}</SimpleDateTime></span><br></br>

            </div>
          </Card>


        </div>


      )



      )
      }
     
    </InfiniteScroll>
  )




}
export default AllPosts;