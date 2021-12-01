import React from 'react';
import Card from '../../UI/Card/Card';
import "./style.css";
import { useEffect, useState } from 'react';
import blogPost from "../../posts.json"
import { NavLink } from 'react-router-dom';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { postCreate } from '../../API/jsonplaceholder';
import { getDoc, doc, getDocs, query } from '@firebase/firestore';
import Firebase from '../../firebase';
import { collection } from '@firebase/firestore';
import { async } from '@firebase/app/node_modules/@firebase/util';
import AllPostsFirestore from '../../containers/AllPostsFirestore/AllPostsFirestore';

/**
* @author
* @function Sidebar
**/

export const Sidebar = (props) => {



    const [posts, setPosts] = useState([]);

    const handleAllPosts = async (e) => {
        const instance = Firebase.getInstance();
        const db = instance.db;
        // const docRef = doc(db, "posts", "3p2qrmWsfF49ZB03rB8u");


        const queryPosts = query(collection(db, "posts"));

        const querySnapshot = await getDocs(queryPosts);
        console.log(querySnapshot);
        // querySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.data().title, " => ", doc.data());
        //   });



        // const snapDoc = await getDoc(docRef);

        setPosts(posts);



    }


    useEffect(() => {

        handleAllPosts();
        // const postssss = blogPost.data;

        // setPosts(postssss);

        // console.log(posts)
    }, [posts]);

    return (
        <div className="sidebarContainer">

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span style={{ textAlign: 'center' }}>About us</span>
                </div>

                <div className="profileImageContainer">
                    <img src="https://pannonians.com/wp-content/uploads/2021/09/Technologies-1.png" alt="" />
                </div>

                <div className="cardBody">
                    <p className="personalBio">In the era of digital transformation,
                        our mission is to help enterprises acceleratethe adoption of new technologies,
                        untwine complex issues that inevitably arise during digital evolution,
                        and orchestrate ongoing innovation.
                        Reliable and flexible software solutions are a must-have for any successful business,
                        whether it be sales, science, entertainment, or heavy industry.
                        Our main mission is to offer you powerful smart applications tailor-made to fit your needs and overcome the challenges you face as an organization.
                        Besides the speed of delivery and creating an application much faster,
                        we also provide competitive rates. This makes your investment worthwhile.
                        This in combination with our extensive experience in software development,
                        business analysis, and management, coupled with our passion for technology makes us the perfect partner for your endeavor.
                        Not only do we guarantee the quality of the work we deliver,
                        via the means of certifications, but customer-oriented service is of paramount importance to us.
                        You won’t be treated as a number when working with us.</p>

                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <div className="userInfo link">
            <a href="#">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <NavLink to="/allPosts">ALL POSTS</NavLink>
                    {/* <button onClick={handleAllPosts}>All posts</button> */}
                </div>
            </Card>
            <div className="allPosts">

                {
                    posts.map(post => {
                        return (

                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.title}</h3>
                                    <span>Nov 5, 2021</span>

                                </div>
                            </NavLink>


                        );
                    })
                }





            </div>

        </div>


    )
}

export default Sidebar;

