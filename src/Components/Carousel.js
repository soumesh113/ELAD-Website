import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "./img_1.jpeg"
import img_2 from "./img_2.jpeg"
import img_3 from "./img_3.jpg"
import "./index.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class Carousel extends Component {
  
 render(){ const settings = {
    dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div class = "container">
      <h2>Events</h2>
      <Slider {...settings}>
          <div>
            <img src = {img_1} width = "100%"></img>
          </div>
          <div>
            <img src = {img_2} width = "100%"></img>
          </div>
          <div>
            <img src = {img_3} width = "100%"></img>
          </div>
      </Slider>
    </div>
  );
 }
};

export default Carousel;
