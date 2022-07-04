import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/carousel.css'

export const Carousel = () => {
    return (
        <div className="head-carousel">
            <Carousel controls={false} indicators={false} pause={false}>
                <Carousel.Item interval={1000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://virmansha.com/assets/img/bg/bg-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-div">
                        <h1 className="caption">Tales of Craft</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://virmansha.com/assets/img/bg/bg-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="caption-div">
                        <h1 className="caption">Behold Vibrance</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://virmansha.com/assets/img/bg/bg-8.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-div">
                        <h1 className="caption">Celebrating Handicrafts</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://virmansha.com/assets/img/bg/bg-4.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-div">
                        <h1 className="caption" >Sustainable and Sensible</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}