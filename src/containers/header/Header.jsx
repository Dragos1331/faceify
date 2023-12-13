import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
    return (
        <div className='faceify__header section__padding' id='home'>
            <div className='faceify__header-content'>
                <h1 className='gradient__text'>Let's build something out of imagination with Faceify</h1>
                <p>With Faceify, you can upload or choose any face photo and animate it with various effects. You can also change the voice, background, music, and text of your animation. Faceify uses AI to generate realistic and expressive animations. You can share or download your animations as videos or GIFs. Try Faceify and have some fun!</p>
                <div className='faceify__header-content__input'>
                    <input type='email' placeholder='Type your E-mail address'></input>
                    <button type='button'>Try now!</button>
                </div>
                <div className='faceify__header-content_people'>
                    <img src={people} alt="people" />
                    <p>1000+ people requested access in last 24 hours</p>
                </div>
            </div>
            <div className='faceify__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
