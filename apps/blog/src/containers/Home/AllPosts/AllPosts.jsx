import React from "react";
import "./style.css";
import Card from "../../../UI/Card/Card";
import pictures4 from "../../../pictures/picture4.jpg";
import picture3 from "../../../pictures/Slika-3.jpg";
import Firebase from "../../../firebase";
import { query, collection, getDocs, orderBy, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import SimpleDateTime from "react-simple-timestamp-to-date";
import ReadMore from "../../../components/ReadMore/ReadMore";
import InfiniteScroll from "react-infinite-scroll-component";

/**
 * @author
 * @function AllPosts
 **/

export const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);

  const instance = Firebase.getInstance();
  const db = instance.db;
  const arrayPosts = [];

  const handleAllPosts = async (e) => {
    const queryPosts = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(queryPosts);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().title);
      let document = doc.data();
      document.id = doc.id;
      arrayPosts.push(document);

      console.log(doc.timestamp);
    });
    console.log("arrayPosts", arrayPosts);
    setPosts(arrayPosts);
    // console.log(arrayPosts);
  };

  const loadMore = () => {
    setVisible((previouseValue) => previouseValue + 3);
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  if (posts == []) {
    return null;
  }
  return posts.slice(0, visible).map((post) => (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src={pictures4} alt="" />
        </div>

        <div style={{ textAlign: "center" }}>
          <h2>{post.title}</h2>

          <ReadMore textPost={post.post}>
            <span dangerouslySetInnerHTML={{ __html: post.post }} />
          </ReadMore>
          <span>
            <SimpleDateTime
              dateSeparator="."
              timeSeparator=":"
              dateFormat="DMY"
              showTime="0"
            >
              {post.createdAt}
            </SimpleDateTime>
          </span>
          <br></br>
        </div>
       
      </Card>
      
    </div>
  ));
};
export default AllPosts;
