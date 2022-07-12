import React, { useState } from 'react';

function Projects() {

    const [photos] = useState([
        {
            id: '1',
            name: 'Dad Joke Website',
            description: 'Dad Joke Meme Creator Website',
            github: 'https://github.com/ethancahill/Best-Site-No-Joke'
        },
        {
            id: '2',
            name: 'Social Tech Meetup',
            description: 'Social Media API Backend NoSQL Database',
            github: 'https://github.com/Doctor-Worm/BFFL-API'
        },
        {
            id: '3',
            name: 'Busy Shopping Center',
            description: 'Employee Tracking SQL Database',
            github: 'https://github.com/Doctor-Worm/Employee-Tracker'
        },
        {
            id: '4',
            name: 'Cell Phone in a Shopping Cart',
            description: 'Ecommerce Website Backend SQL Database Using ORM Sequelize',
            github: 'https://github.com/Doctor-Worm/E-Commerce_Backend'
        }
    ]);
    // console.log(photos);
    return(
        <div>
            <h2>Projects</h2>
            <div className='flex-row'>
                {photos.map((image, i) => (
                    <figure className='textover' key={image.name}>
                        <img src={require(`../../assets/photos/${i}.jpg`)}
                            alt={image.name}
                            className='img-thumbnail mx-1'
                        />
                        <div className='image-text'>
                            <a href={image.github} target='_blank' rel='noopener noreferrer'>
                                <figcaption>{image.description}</figcaption>
                            </a>
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default Projects;