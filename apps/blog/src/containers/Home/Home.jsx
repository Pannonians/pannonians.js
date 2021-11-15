import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../UI/Card/Card';
import "./style.css"
import postImage1 from "../../postImage1.jpg";
import picture4 from "../../pictures/picture4.jpg"
/**
* @author
* @function Home
**/

const Home = (props) => {

  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight / 3;

  return (
    <div className="home">
      <Hero />
      <Card>

        <div className="galleryPost" style={galleryStyle}>
          <section style={{ width: '70%' }}>
            <div className="postImageWrapper"> 
              <img src="https://pannonians.com/wp-content/uploads/2021/08/Slika-3.jpg" alt="" />
            </div>
          </section>

          <section className="sideImageWrapper" style={{ width: '30%' }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={"https://images.unsplash.com/photo-1587955415524-bb264e518428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} alt="" />
            </div>

            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={"https://pannonians.com/wp-content/uploads/2021/08/Slika-3.jpg"} alt="" />
            </div>

            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={"https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} alt="" />
            </div>
          </section>

        </div>

      </Card>

      <section className="HomeContainer">
        <div style={{width: '70%'}}>
        <Card style={{ marginBottom: '20px' }}>
          <div className="postImageWrapper">
          <img src={picture4} alt=""/>
          </div>

          <div style={{textAlign: 'center'}}>
            <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>
            <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
               totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>
               <button>Read More</button>
          </div>
          
        </Card>

        <Card style={{ marginBottom: '20px' }}>
          Post 2
        </Card>
        </div>

        <Sidebar />
      </section>
    </div>

  );
}

export default Home;