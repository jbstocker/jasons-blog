import './Projects.css';




function Projects() {
  const lightningRef = () => {
    return (
    <a href="https://lightningjs.io/" target="_blank" rel="noopener noreferrer">LightningJS</a>
    )
  }

  const xclassTvRef = () => {
    return (
    <a href="https://www.xclasstv.com/" target="_blank" rel="noopener noreferrer">XClass TV</a>
    )
  }

  const githubInterviewRef = () => {
    return (
    <a href="https://github.com/jbstocker/lightning-interview-question" target="_blank" rel="noopener noreferrer">lightning-interview-question</a>
    )
  }

  return (
    <div className="projects">
      <div className='project-section'>
        <img src='/images/xclassTvSearch.webp' alt='Xclass tv' loading='lazy'></img>
        <div className="text-container">
          <h1>XClass TV</h1>
          <p>
            I currently work as the engineering manager for the {xclassTvRef()} user interface.
            XClass TV is brand new smart TV user interface, built using the {lightningRef()} framework.
          </p>
        </div>
      </div>
      <div className='project-section'>
      <video autoPlay  muted loop playsInline>
        <source src="/videos/InterviewQuestions.webm" type="video/webm" />
        <source src="/videos/InterviewQuestions.mp4" type="video/mp4" />
      </video>
      {/* <img src='/images/lightning-interview-success.gif' alt='A basic searchpage' loading='lazy'></img> */}
        <div className="text-container">
          <h1>Interview Questions Project</h1>
          <p>
            As an engineering manager I have decided to start creating a series of repositories that offer hiring managers
            a resource to test potential candidates.  
            The first example({githubInterviewRef()}) is already live and in use today as a {lightningRef()} based challenge.  
            These challenges are set to be done in a reasonable amount of time and should show off the basic skills of a candidate. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
