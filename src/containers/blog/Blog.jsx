import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
    return (
        <div className='faceify__blog section__padding' id='blog'>
            <div className='faceify__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, We are blogging about it</h1>
            </div>
            <div className='faceify__blog-container'>
                <div className='faceify__blog-container_groupA'>
                    <Article imgUrl={blog01} date="May 31 2023" title={"How Faceify App Uses AI to Simplify and Secure Attendance Tracking"} />
                </div>
                <div className='faceify__blog-container_groupB'>
                    <Article imgUrl={blog02} date="Apr 29 2023" title={"A Smart Solution for Attendance Management"} />
                    <Article imgUrl={blog03} date="Mar 22 2023" title={"How to Register Your Attendance with Faceify App in Seconds"} />
                    <Article imgUrl={blog04} date="Feb 09 2023" title={"The Benefits of Using Faceify App for Attendance Recording"} />
                    <Article imgUrl={blog05} date="Jan 02 2023" title={"A Revolutionary Way to Use AI for Attendance Verification"} />
                </div>
            </div>
        </div>
    )
}

export default Blog
