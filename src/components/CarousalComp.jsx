import { Carousel, Container } from "react-bootstrap";
import imag1 from "../assets/carousalimg/img1.jpeg";
import imag2 from "../assets/carousalimg/img2.jpeg";
import imag3 from "../assets/carousalimg/img3.jpeg";

function CarousalComp() {
  const CarousalTitle = ({color}) => {
    return (
      <div style={{color:color}}>
        <h3>Enjoy Our Delicious Meal</h3>
        <p>Taste of splendour is a restaurant and coffee roasterylocated in india</p>
        <p>We have awesome recepies and talented chefs in town!</p>
      </div>
    );
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={imag1} // Replace with your image source
            alt="First slide"
            width="100%"
            height="300px"
          />
          <Carousel.Caption>
            <CarousalTitle color={'black'}/>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={imag2} // Replace with your image source
            alt="Second slide"
            width="100%"
            height="300px"
          />
          <Carousel.Caption>
          <CarousalTitle color={'black'}/>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={imag3} // Replace with your image source
            alt="Third slide"
            width="100%"
            height="300px"
          />
          <Carousel.Caption>
          <CarousalTitle color={'black'}/>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarousalComp;
