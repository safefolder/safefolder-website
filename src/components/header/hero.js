import React from 'react';
// import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// <Img fluid={image} className="img-fluid" />
// overlay="black-slight" 

const Hero = (
  {
    image, 
    title, 
    color, 
    font_weight=300,
    height="100%",
    skipBottomMargin="false"
  }) => {
    let bottomMargin = "mb-3";
    if (skipBottomMargin == "yes") {
      bottomMargin = "mb-0";
    }
    const image_render = getImage(image);
    console.log("font_weight...");
    console.log(font_weight);
    return (
      <div class="container-fluid sf-header-section text-center position-relative" >
        <GatsbyImage 
          className="img-fluid d-block center-block" 
          image={image_render} 
          alt="Terms" 
        />
        <h1 
          class="position-absolute top-50 start-50 translate-middle sf-hero-title" 
          style={{"color": color, "font-weight": font_weight.toString()}}>{title}</h1>
      </div>
    )
}

export default Hero
