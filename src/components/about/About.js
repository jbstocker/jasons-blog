import './About.css';

function About() {
  return (
    <div className="about">
      <div className="text-container">
        <h1>Welcome!</h1>
        <p>
          My name is Jason Stocker, and I'm a full-stack software engineer. 
          When I'm not building websites and web-apps you'll find me outside taking photos or
          (attempting) to build furniture. 
          <br />
          <br />
          Please feel free to browse my
          personal site, it's currently a work in progress and I hope to start
          publishing a photo-blog here shortly. This page was designed using
          ReactJS and it is hosted via Amazon Web Services (AWS).
        </p>
      </div>
    </div>
  );
}

export default About;
