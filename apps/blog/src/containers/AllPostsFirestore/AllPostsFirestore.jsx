import React from 'react'
import { useState } from 'react';
import Firebase from '../../firebase';
import { query, collection, getDocs } from '@firebase/firestore';

/**
* @author
* @function AllPostsFirestore
**/

const AllPostsFirestore = (props) => {

  const [posts, setPosts] = useState([]);

  const handleAllPosts = async (e) => {
      const instance = Firebase.getInstance();
      const db = instance.db;
      // const docRef = doc(db, "posts", "3p2qrmWsfF49ZB03rB8u");


      const queryPosts = query(collection(db, "posts"));

      const querySnapshot = await getDocs(queryPosts);
      querySnapshot.forEach((doc) => {
      //     // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().title);
        });
        

      console.log(querySnapshot)
      // querySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      // const snapDoc = await getDoc(docRef);

      setPosts(posts);



  }




  return(
    <div>AllPostsFirestore
    <button onClick={handleAllPosts}>All posts</button>
    </div>
   )
  }

  export default AllPostsFirestore;