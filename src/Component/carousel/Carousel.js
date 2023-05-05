import { Carousel } from "antd";
import carousel1 from "../../asset/carousel1.png";
import carousel2 from "../../asset/carousel2.png";
import carousel7 from "../../asset/carousel7.png";

import "./carousel.css";
const contentStyle = {
  height: "420px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const images = [
  {
    id: 1,
    image: carousel1,
  },{
    id: 2,
    image: carousel2,
  },{
    id: 3,
    image: carousel7,
  },
];
const CarouselSlider = () => (
  <Carousel autoplay>
    {images.map((value) => {
      return (
        <div className="carousel-con" key={value.id}>
          <div style={contentStyle} className="carousel-img-con">
            <img  src={value.image} alt="img" />
          </div>
        </div>
      );
    })}
  </Carousel>
);
export default CarouselSlider;
