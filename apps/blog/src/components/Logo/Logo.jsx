import React from 'react'
import Skoljka_color from "../../Skoljka_color.png";

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <img  src={Skoljka_color} alt="" style={{width: '100px', marginLeft: '600px'}} />
    </div>
   )
  }

  export default Logo;