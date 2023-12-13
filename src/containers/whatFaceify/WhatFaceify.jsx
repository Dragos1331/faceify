import React from 'react'
import './whatFaceify.css'
import { Features } from '../../containers'

const WhatFaceify = () => (
    <div className='faceify__whatfaceify section__margin' id='wfaceify'>
        <div className='faceify__whatfaceif-feature'>
            <Features title="What is Faceify" text="Faceify is a website that lets you create fun and realistic animations of any face photo. You can upload your own photo or choose from our gallery of celebrities, animals, cartoons, and more. Then, you can select from a variety of animation effects, such as smiling, blinking, talking, singing, dancing, and more. You can also customize the voice, background, music, and text of your animation. Faceify uses advanced AI technology to generate high-quality animations that look natural and expressive. You can share your animations with your friends on social media, or download them as videos or GIFs. Faceify is the ultimate website for creating amazing AI face animations in minutes." />
        </div>
        <div className='faceify__whatfaceify-heading'>
            <h1 className='gradient__text'>Your mind is the only limit</h1>
            <p>Explore the Library</p>
        </div>
        <div className='faceify__whatfaceify-container'>
            <Features title="Face swap" text="This feature allows you to swap your face with any other face in the media library, such as celebrities, animals, or cartoons. You can also upload your own photos and swap faces with your friends or family." />
            <Features title="Face animation" text="This feature enables you to animate your face with various effects, such as smiling, blinking, talking, singing, or dancing. You can also customize the voice, background, music, and text of your animation." />
            <Features title="Face style transfer" text="This feature lets you transform your face into different styles, such as paintings, anime, cyberpunk, or sketch. You can also apply filters, stickers, and frames to your face." />
        </div>
    </div>
);

export default WhatFaceify;
