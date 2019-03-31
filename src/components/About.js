import React from "react";
import bwMountain from "../media/bwMountain.jpg";
import { Paper, Typography } from "@material-ui/core";

const styles = {
  sectionStyle: {
    height: "160%",
    backgroundImage: `url(${bwMountain})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  paperStyle: {
    position: "relative",
    top: "5%",
    left: "55%",
    width: "40%",
    align: "right",
  }
};

const About = () => {
  return (
    <section style={styles.sectionStyle}>
      <Paper style={styles.paperStyle} elevation={1}>
        <Typography variant="h2" component="h3">
          About Me
        </Typography>
        <Typography component="p">
          Welcome! My name is Jason Stocker, and I'm a full stack software
          engineer what happens with a space
        </Typography>
      </Paper>
    </section>
  );
};

export default About;
