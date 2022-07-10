import React from 'react';

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
                <a href='/'>Skylar Jackson</a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about' onClick={() => { setContactSelected(false); setResumeSelected(false) }}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactedSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(true); setResumeSelected(false) }}>
                            Contact
                        </span>
                    </li>
                    <li className='mx-1'>
                        <a href='#projects' onClick={() => { setContactSelected(false); setResumeSelected(false) }}>
                            Projects
                        </a>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <a href='#resume' onClick={() => { setContactSelected(false); setResumeSelected(true) }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};