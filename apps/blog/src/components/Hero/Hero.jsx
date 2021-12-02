import React from 'react'
import Logo from '../../components/Logo/Logo'
import Card from '../../UI/Card/Card'
import Navbar from '../Navbar/Navbar'
import Firebase from '../../firebase'
import Header from '../Header/Header'

/**
* @author
* @function Hero
**/

export const Hero = (props) => {

  
  return(
    <div className="hero">
        <Card>
          <div style={{paddingBottom:"50px", paddingTop: "20px"}}>
            <Header />
            
          </div>
         
        </Card>
    </div>
   )
  }

  export default Hero;
