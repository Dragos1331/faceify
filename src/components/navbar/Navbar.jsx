import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wfaceify'>What is Faceify?</a></p>
        <p><a href='#posibillity'>OpenAI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='faceify__navbar'>
            <div className='faceify__navbar-links'>
                <div className='faceify__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='faceify__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='faceify__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='faceify__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='faceify__navbar-menu-container scale-up-center'>
                        <div className='faceify__navbar-menu_container-links'>
                            <Menu />
                            <div className='faceify__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar
