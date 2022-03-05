  import "./Crousel.css";
  import { useState } from "react";
  import Slider from "react-slick";
  import astronaut from './images_Sofa/div-2-image3.jpg';
  import celebrating from './images_Sofa/div-3-image2-4.webp';
  import education from './images_Sofa/div-2-image4.jpg';
  import taken from './images_Sofa/div-3-image2-2.webp';
  import little from './images/Div-six-image4.webp';
  import huge from './images_Sofa/div-5-image2.jpg';
  import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

  const images = [astronaut, celebrating, education, taken, little, huge];


  function Crousel_Sofa() {
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

  export default Crousel_Sofa;