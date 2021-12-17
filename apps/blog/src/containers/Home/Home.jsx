import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../UI/Card/Card";
import { AllPosts } from "./AllPosts/AllPosts";
import { useState, useEffect } from "react";
import "./style.css";
import { collection, query, orderBy, getDocs, doc } from "firebase/firestore";
import Firebase from "../../firebase.js";
import ReadMore from "../../components/ReadMore/ReadMore";
import SimpleDateTime from "react-simple-timestamp-to-date";
import pictures4 from "../../pictures/picture4.jpg";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = galleryHeight / 3;
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);
  const [isEmpty, setIsEmpty] = useState(false);

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

    setPosts(arrayPosts);
  };

  const loadMore = () => {
    setVisible((previouseValue) => previouseValue + 3);
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  useEffect(() => {
    setIsEmpty(!(posts.length > visible))
  }, [visible, posts]);

  if (posts == []) {
    return null;
  }

  return (
    <div className="home">
      <Hero />
      <Card style={{ width: "80%", margin: "auto" }}>
        <div className="galleryPost" style={galleryStyle}>
          <section style={{ width: "70%" }}>
            <div className="postImageWrapper">
              <img
                src="https://pannonians.com/wp-content/uploads/2021/08/Slika-3.jpg"
                alt=""
              />
            </div>
          </section>

          <section className="sideImageWrapper" style={{ width: "30%" }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={
                  "https://images.unsplash.com/photo-1587955415524-bb264e518428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                }
                alt=""
              />
            </div>

            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={
                  "https://pannonians.com/wp-content/uploads/2021/08/Slika-3.jpg"
                }
                alt=""
              />
            </div>

            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={
                  "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                }
                alt=""
              />
            </div>
          </section>
        </div>
      </Card>
      <section
        className="HomeContainer"
        style={{ width: "80%", margin: "auto" }}
      >
        <Sidebar  />
      </section>

 <section style={{marginTop:'-813px', marginLeft:'10%', width: "80%"}}>
      {posts.slice(0, visible).map((post, index) => (
        <div style={props.style}>
          <Card style={{ marginBottom: "20px" }}>
            <div className="postImageWrapper">
              <img src={pictures4} alt="" />
            </div>

            <div key={index} style={{ textAlign: "center" }}>
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
      ))}
     </section>
      <div>

        {/* <AllPosts style={{ width: "70%" }} /> */}
          {!isEmpty && <button className="buttonLoadMore" onClick={loadMore}>
            Load more
          </button>}
          {isEmpty && "There are no more posts"}
      </div>
    </div>
  );
};

export default Home;
