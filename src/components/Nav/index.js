import React from 'react';

function Nav({
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
}) {

    return(
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about' className='navActive' onClick={() => { setContactSelected(false); setResumeSelected(false) }}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(true); setResumeSelected(false) }}>
                            Contact
                        </span>
                    </li>
                    <li className='mx-1'>
                        <a href='#projects' className='navActive' onClick={() => { setContactSelected(false); setResumeSelected(false) }}>
                            Projects
                        </a>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <a href='#resume' className='navActive' onClick={() => { setContactSelected(false); setResumeSelected(true) }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;