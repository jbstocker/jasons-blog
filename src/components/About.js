import React from 'react';
import bwMountain from '../media/bwMountain.jpg'
import { Paper, Typography } from '@material-ui/core';

const styles = {
    sectionStyle : {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bwMountain})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    },
    paperStyle : {
        position: 'relative',
        top: '5%',
        left: '55%',
        width: '40%',
        align: 'right'
    }
};

const About = () => {
    return (
        // <div>
        //     <img src={bwMountain} alt={"Jason Stocker on a mountain"} style={{maxWidth: '100%'}}></img>
        // </div>
        <section style={styles.sectionStyle}>
            <Paper style={styles.paperStyle} elevation={1}>
                <Typography variant="h2" component="h3">
                    About Me
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>      
        </section>
    );
}

export default About