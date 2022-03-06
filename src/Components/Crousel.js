  import "./Crousel.css";
  import { useState } from "react";
  import Slider from "react-slick";
  import astronaut from "./assets/Crousel-image1.jpg";
  import celebrating from "./assets/Crousel-image2.webp";
  import education from "./assets/Crousel-image3.webp";
  import taken from "./assets/Crousel-image-4.webp";
  import little from "./assets/Crousel-image5.jpg";
  import huge from "./assets/Crousel-image6.jpg";
  import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

  const images = [astronaut, celebrating, education, taken, little, huge];


  function Crousel() {
      const NextArrow = ({ onClick }) => {
          return ( <
              div className = "arrow next"
              onClick = { onClick } >
              <
              FaArrowRight / >
              <
              /div>
          );
      };

      const PrevArrow = ({ onClick }) => {
          return ( <
              div className = "arrow prev"
              onClick = { onClick } >
              <
              FaArrowLeft / >
              <
              /div>
          );
      };

      const [imageIndex, setImageIndex] = useState(0);

      const settings = {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          nextArrow: < NextArrow / > ,
          prevArrow: < PrevArrow / > ,
          beforeChange: (current, next) => setImageIndex(next),
      };

      return ( <
          div className = "Crousel" >
          <
          Slider {...settings } > {
              images.map((img, idx) => ( <
                  div className = { idx === imageIndex ? "slide activeSlide" : "slide" } >
                  <
                  img src = { img }
                  alt = { img }
                  /> <
                  /div>
              ))
          } <
          /Slider> <
          /div>
      );
  }

  export default Crousel;