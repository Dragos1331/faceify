import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
    return (
        <div className='faceify__possibility section__padding' id='possibility'>
            <div className='faceify__possibility-image'>
                <img src={possibilityImage} alt="possibilityimage" />
            </div>
            <div className='faceify__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
                <p>With Faceify, you can unleash your creativity and have fun with any face photo. Whether you want to swap faces with your favorite celebrity, animate your face with hilarious effects, transform your face into a different style, or test your knowledge of faces, Faceify has it all. You can also customize your animations with your own voice, background, music, and text. Faceify uses advanced AI technology to generate realistic and expressive animations that will amaze you and your friends. The possibilities are endless and beyond your imagination.</p>
                <h4>Request Earlt Access to Get started</h4>
            </div>
        </div>
    )
}

export default Possibility
