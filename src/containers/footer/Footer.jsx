import React from 'react'
import './footer.css'
import faceifyLogo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='faceify__footer section__padding'>
            <div className='faceify__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>
            <div className='faceify__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='faceify__footer-links'>
                <div className='faceify__footer-links_logo'>
                    <img src={faceifyLogo} alt="logo" />
                    <p>Firidei 4, Bucharest, All Rights Reserved</p>
                </div>
                <div className='faceify__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                    <p>Contact</p>
                </div>
                <div className='faceify__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='faceify__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Firidei 4, Bucharest, Romania</p>
                    <p>+40766936275</p>
                    <p>bdm_dra@yahoo.com</p>
                </div>
            </div>
            <div className='faceify__footer-copyright'>
                <p>© 2023 Faceify. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
