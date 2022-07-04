import './styles/reviews.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';


export const Reviews = () => {
    return (
        <div className='review-section'>
            <div>
                <h2 className='review-title'>REVIEWS</h2>
            </div>
            <div className='carousel-div'>
                <Carousel variant="dark" controls={false} pause={false}>
                    <Carousel.Item interval={3000}>
                        <div className='slide'>
                            <p><FaQuoteLeft /> Hi, I bought a bag from Virmansha and I can't stop emphasising on the fact that it's so good.
                                The best part is it is made from the materials which are no longer in use to anybody.
                                Any person who is keen towards a better environment would opt for something like this.
                                Loved the idea behind this. <FaQuoteRight /></p>
                            <h3>-Shivangi Jaiswal, Kolkata</h3>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item  interval={3000}>
                        <div className='slide'>
                            <p><FaQuoteLeft /> I love the design and finishing of Virmansha products, they are modern, sustainable and impeccable in their craft.
                                I wish them success in their journey of recycling and up cycling! <FaQuoteRight /></p>
                            <h3>-Rashmi Das Chaudhary, Kolkata</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className='slide'>
                            <p><FaQuoteLeft /> I purchased the hand bag for my mom through my savings and it's worth it... she loves the bag
                                and the most loving part is the, bag is aesthetically pleasant yet sustainable... <FaQuoteRight /></p>
                            <h3>-Shreyanshu, Lucknow</h3>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}