import './styles/footer.css';
import { BiEnvelope } from 'react-icons/bi'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <div className='footer-section1'>
                    <img className='logo' src='https://virmansha.com/assets/img/logo3.png' />
                </div>
                <div className='footer-section2'>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Impact</p>
                </div>
                <div className='footer-section3'> 
                    <p>Blog</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                </div>
                <div className='footer-section4'>
                    <p><BiEnvelope />virmansha.sj@gmail.com</p>
                </div>
            </div>
            <hr></hr>
            <div className='footer-end'>
                <p>Designed With Love By <strong>AwesomeSauce Creative</strong></p>
            </div>
        </div>
    )
}