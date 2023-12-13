import React from 'react'
import './allfeatures.css'
import { Features } from '../../containers'

const featuresData = [
    {
        title: 'Face morphing',
        text: 'Blend two or more faces together and create a new face. Adjust the degree of morphing and see the results.',
    },
    {
        title: 'Face aging',
        text: 'See how your face or any other face will look like in the future. Choose different age ranges and compare the results.',
    },
    {
        title: 'Face emotion',
        text: 'Change the expression of your face or any other face. Choose from a range of emotions, such as happy, sad, angry, surprised, etc.',
    },
    {
        title: 'Face quiz',
        text: 'Test your knowledge of faces. Answer questions about celebrities, animals, cartoons, and more.',
    },
];

function Allfeatures() {
    return (
        <div className='faceify__features section__padding' id='features'>
            <div className='faceify__features-heading'>
                <h1 className='gradient__text'>The Ultimate AI Face Animation App. Use advanced AI to generate high-quality animations of any face photo and share them with your friends.</h1>
                <p>Request early access to get started</p>
            </div>
            <div className='faceify__features-container'>
                {featuresData.map((item, index) => (
                    <Features title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Allfeatures
