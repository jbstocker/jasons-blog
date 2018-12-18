import React from 'react';
import croppedSuit from '../media/croppedSuit.jpg'
import bwProfile from '../media/bwprofile.jpg'
import bwMountain from '../media/bwMountain.jpg'


const About = () => {
    return (
        <div>
            <img src={bwMountain} alt={"Jason Stocker in a suit!"} style={{maxWidth: '100%'}}></img>
            <h1>
                Here is where the about section goes
            </h1>
        </div>
    );
}

export default About