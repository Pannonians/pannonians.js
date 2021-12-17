import React from "react";

import Card from "../../UI/Card/Card";

import Header from "../Header/Header";

/**
 * @author
 * @function Hero
 **/

export const Hero = (props) => {
  return (
    <div className="hero">
      <Card style={{ width: "80%", margin: "auto" }}>
        <div style={{ padding: "50px 0" }}>
          <Header />
        </div>
      </Card>
    </div>
  );
};

export default Hero;
