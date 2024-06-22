import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Header = (props) => {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    interval={3000} // Auto slide interval in milliseconds
  >
    <div>
      <img src="img/about.jpg" alt="First slide" />
    </div>
    <div>
      <img src="img/about.jpg" alt="Second slide" />
    </div>
    <div>
      <img src="img/about.jpg" alt="Third slide" />
    </div>
  </Carousel>


    
  );
};
