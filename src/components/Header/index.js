import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return(
        <header className='flex-row px-1'>
            <h2>
                <a href='/'>Skylar D. Jackson</a>
            </h2>
            <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            ></Nav>
        </header>
    );
};

export default Header;