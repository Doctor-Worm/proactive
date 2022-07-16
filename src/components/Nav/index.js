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
                    <li className='mx-2 navActive component'>
                        <a href='#about' onClick={() => { setContactSelected(false); setResumeSelected(false); setProjectsSelected(false) }}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 component ${contactSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(true); setResumeSelected(false); setProjectsSelected(false) }}>
                            Contact
                        </span>
                    </li>
                    <li className={`mx-2 component ${projectsSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(false); setResumeSelected(false); setProjectsSelected(true) }}>
                            Projects
                        </span>
                    </li>
                    <li className={`mx-2 component ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => { setContactSelected(false); setResumeSelected(true); setProjectsSelected(false) }}>
                            Resume
                        </span>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;