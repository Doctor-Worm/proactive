import React, { useState } from 'react';

function Projects() {

    const [photos] = useState([
        {
            name: 'Dad Joke Website',
            description: 'Dad Joke Meme Creator',
            github: 'https://github.com/ethancahill/Best-Site-No-Joke'
        },
        {
            name: 'Social Tech Meetup',
            description: 'Social Media API Backend NoSQL Database',
            github: 'https://github.com/Doctor-Worm/BFFL-API'
        },
        {
            name: 'Busy Shopping Center',
            description: 'Employee Tracking SQL Database',
            github: 'https://github.com/Doctor-Worm/Employee-Tracker'
        },
        {
            name: 'Cell Phone in a Shopping Cart',
            description: 'Ecommerce Backend SQL DB Using ORM Sequelize',
            github: 'https://github.com/Doctor-Worm/E-Commerce_Backend'
        },
        {
            name: 'Website App',
            description: 'Throwback Generator',
            github: 'https://github.com/awnasworthy/throwback-generator'
        },
        {
            name: 'Team Profile Generator',
            description: 'Business Team Profiles',
            github: 'https://github.com/Doctor-Worm/Team-Profile-Generator'
        },
        {
            name: 'Cartoon Refrigerator',
            description: 'Fridge Friend',
            github: 'https://github.com/beimy/fridge-friend'
        }
    ]);
    // console.log(photos);
    return(
        <div>
            <h2 className='title'>Projects</h2>
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