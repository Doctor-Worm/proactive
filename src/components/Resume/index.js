import React from 'react';


function Resume() {
   
    return(
        <div>
            <h2>Resume</h2>
            <section>
                <h3>Front-End Skills</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                </ul>
                <br></br>
                <h3>Back-End Skills</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL / Sequelize</li>
                    <li>MongoDB / Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </section>
            <a href={require('../../assets/resume/S-Jackson_Resume.pdf')}>Open a PDF of my resume.</a>
        </div>
    );
};

export default Resume;