import './styles/navbar.css';
import { BiSearch } from 'react-icons/bi';
import { BiShoppingBag } from 'react-icons/bi';
import { FcMenu } from 'react-icons/fc';
import { Header } from './Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export const Navbar = () => {

    let navigate = useNavigate();

    const handleroute = () => {
        navigate('/payment')
    }

    return (
        <div className='nav'>
            <Header />
            <div className='social-links'>
                <img src='https://virmansha.com/assets/img/fb.png' />
                <img src='https://virmansha.com/assets/img/insta.png' />
                <img src='https://virmansha.com/assets/img/linkedin.png' />
            </div>
            <div>
                <Link to ="/"><img className='logo' src="https://virmansha.com/assets/img/logo3.png" /></Link>
            </div>
            <div className='utils'>
                <BiSearch className='search-icon' />
                <BiShoppingBag className='bag-icon' />
                <FcMenu className='menu-icon' />
                <h2 onClick={handleroute}>Pay</h2>
            </div>
        </div>
    )
}