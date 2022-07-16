import React from 'react';

function Nav({
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    projectsSelected,
    setProjectsSelected
}) {

    return(
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2 navActive'>
                        <a href='#about' onClick={() => { setContactSelected(false); setResumeSelected(false); setProjectsSelected(false) }}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(true); setResumeSelected(false); setProjectsSelected(false) }}>
                            Contact
                        </span>
                    </li>
                    <li className={`mx-2 ${projectsSelected && 'navActive'}`}>
                        <a href='#projects' className='navActive' onClick={() => { setContactSelected(false); setResumeSelected(false); setProjectsSelected(true) }}>
                            Projects
                        </a>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <a href='#resume' className='navActive' onClick={() => { setContactSelected(false); setResumeSelected(true); setProjectsSelected(false) }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;