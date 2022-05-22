import React from "react";
import dummyimage from "../../assets/images/dummyimage.png";
import demo from "../../assets/images/demo.png";
import demo2 from "../../assets/images/demo2.png";

import { Carousel  } from "react-bootstrap";
const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={demo2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={demo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dummyimage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
