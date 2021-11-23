import React from 'react'
import Logo from '../../components/Logo/Logo'
import Card from '../../UI/Card/Card'
import Navbar from '../Navbar/Navbar'
import Firebase from '../../firebase'

/**
* @author
* @function Hero
**/

export const Hero = (props) => {

  
  return(
    <div className="hero">
        <Card>
          <div style={{padding: '50px 0'}}>
            <Logo />
          </div>
          <Navbar />
        </Card>
    </div>
   )
  }

  export default Hero;
