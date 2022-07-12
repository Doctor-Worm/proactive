import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return(
        <div className='footer'>
            <h6>&copy; Skylar D. Jackson</h6>
            <div className='links'>
                <a href='mailto:sky.jackson@icloud.com' className='logo'><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href='https://github.com/Doctor-Worm/' target='_blank' rel='noopener noreferrer' className='logo'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/skylar-d-jackson/' target='_blank' rel='noopener noreferrer' className='logo'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
    );
};



export default Footer;