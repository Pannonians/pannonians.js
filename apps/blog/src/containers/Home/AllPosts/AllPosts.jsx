import React from 'react'
import "./style.css";
import Card from '../../../UI/Card/Card';
import pictures4 from "../../../pictures/picture4.jpg"
import picture3 from "../../../pictures/Slika-3.jpg"


/**
* @author
* @function AllPosts
**/

export const AllPosts = (props) => {
  return(
    <div style={ props.style}>
    <Card style={{ marginBottom: '20px' }}>
      <div className="postImageWrapper">
      <img src={pictures4} alt=""/>
      </div>

      <div style={{textAlign: 'center'}}>
        <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>

        <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
           totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>

           <button>Read More</button>
      </div>

         
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <div className="postImageWrapper">
      <img src={picture3} alt=""/>
      </div>

      <div style={{textAlign: 'center'}}>
        <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>

        <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
           totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>

           <button>Read More</button>
      </div>

         
    </Card>


    <Card style={{ marginBottom: '20px' }}>
      <div className="postImageWrapper">
      <img src="https://images.unsplash.com/photo-1587955415524-bb264e518428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt=""/>
      </div>

      <div style={{textAlign: 'center'}}>
        <h2>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>

        <span>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
           totam\nnostrum rerum est autem sunt rem eveniet architecto</span><br></br>

           <button>Read More</button>
      </div>

         
    </Card>

    </div>

   )
  }
