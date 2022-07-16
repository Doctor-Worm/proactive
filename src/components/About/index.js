import React from 'react';

function About() {

    return(
        <div>
            <div>
            <h2>About Me</h2>
            <img className='avatar' src={require('../../assets/photos/1.jpg')} alt="Avatar"></img>
            </div>
            <p>My name is Skylar Jackson and I am a full-stack Web Application Developer and Software Developer. Over the past 2 years I have developed a sincere passion and enjoyment for Web Application and Software development, and have recently finished a Full Stack Web Development Bootcamp through the University of Central Florida. I begun my career as a professional musician, and then later owned and operated a music school for 4 years. My background in the study of music benefits my ability to problem solve and come up with creative solutions, apply strong focus & self-discipline, and think through design issues with an out-of-the-box approach. My entreprenuer and business background benefits my ability understand problems at hand that businesses need sloved and improved, as well as knowing how to lead and communicate effectively with a team. Additionally, my detail-oriented nature leads me to always write code that is clean, concise, and DRY. I delight in being able to put my creative and analytical skillsets to use together in one field.</p>
        </div>
    );
};

export default About;