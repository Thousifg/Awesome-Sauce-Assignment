import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { Features } from "./FeatureCards";
import { About } from "./About";
import { Products } from "./Products";
import { Design } from "./Design";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";

export const Main = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Features />
            <About />
            <Products />
            <Design />
            <Reviews />
            <Footer />
        </div>
    )
}