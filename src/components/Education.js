import React from "react";
import psuCampus from "../media/psuCampus1.jpg";
import umCampus from "../media/uMarylandCampus1.png";
import { Paper, Typography } from "@material-ui/core";

const styles = {
  educationContent: {
    height : '100%',
  },
  psuSection: {
    height: '50%',
    backgroundImage: `url(${psuCampus})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  umSection: {
    height: '50%',
    backgroundImage: `url(${umCampus})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  psuPaper: {
    position: 'relative',
    top: '5%',
    marginLeft: 'auto',
    marginRight: '2em',
    maxWidth: '32em',
    align: 'right',
    opacity: '0.9'
  },
  umPaper: {
    position: 'relative',
    top: '5%',
    marginLeft: '2em',
    marginRight: 'auto',
    maxWidth: '32em',
    align: 'right',
    opacity: '0.9'
  },
  header: {
    padding: '10px',
    color: 'teal',
    fontWeight: '700',
  },
  paragraph: {
    padding: '0px 20px 10px 20px',
    fontSize: '1.1em'
  }
};

const Education = () => {
  return (
    <div style={styles.educationContent}>
    <section style={styles.psuSection}>
      <Paper style={styles.psuPaper} elevation={1}>
        <Typography style={styles.header} variant="headline" component="h2">
          Bachelor of Science - Aerospace Engineering
        </Typography>
        <Typography style={styles.paragraph} component="p">
          I got my degree at penn state!
        </Typography>
        <Typography style={styles.paragraph} component="p"> </Typography>
        <Typography style={styles.paragraph} component="p">
          Thanks for stopping by!
        </Typography>
      </Paper>
    </section>
    <section style={styles.umSection}>
    <Paper style={styles.umPaper} elevation={1}>
      <Typography style={styles.header} variant="headline" component="h2">
        Master of Engineering - Project Management
      </Typography>
      <Typography style={styles.paragraph} component="p">
        I got my masters at UM
      </Typography>
      <Typography style={styles.paragraph} component="p"> </Typography>
      <Typography style={styles.paragraph} component="p">
        Thanks for stopping by!
      </Typography>
    </Paper>
  </section>
  </div>
  );
};

export default Education;