import Marquee from "react-fast-marquee";
import './styles/header.css';

export const Header = () => {
    return (
        <div className="marquee">
            <Marquee speed={80} gradient={false}>Let's leave a better planet for the coming generations!</Marquee>
        </div>
    )
}