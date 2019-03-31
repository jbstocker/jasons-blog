import React from "react";
import bwMountain from "../media/bwMountain.jpg";
import { Paper, Typography } from "@material-ui/core";

const styles = {
  section: {
    height: '160%',
    backgroundImage: `url(${bwMountain})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    position: 'relative',
    top: '5%',
    left: '55%',
    width: '40%',
    align: 'right',
  },
  header: {
    padding: '10px',
    color: 'teal',
    fontWeight: '700',
  },
  paragraph: {
    padding: '0px 10px 10px 10px',
    fontSize: '1.1em'
  }
};

const About = () => {
  return (
    <section style={styles.section}>
      <Paper style={styles.paper} elevation={1}>
        <Typography style={styles.header} variant="headline" component="h2">
          Welcome!
        </Typography>
        <Typography style={styles.paragraph} component="p">
          My name is Jason Stocker, and I'm a full stack software
          engineer. When I'm not building websites you'll find me outside 
          taking photos or (attempting) to build furniture. Please feel 
          free to browse my personal site, it's currently a work in progress
          and I hope to start publishing a photo-blog here shortly. 
        </Typography>
        <Typography style={styles.paragraph} component="p">
          Thanks for stopping by!
        </Typography>
      </Paper>
    </section>
  );
};

export default About;
