import React, { useRef } from 'react';
import './Home.css';
import About from '../about/About';
import NavBar from '../nav-bar/NavBar';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Copyright from '../copyright/Copyright';

function Home() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  function scrollToProjects() {
    projectsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  return (
    <div>
      <NavBar
        title='JasonStocker.com'
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
      />
      <div className='section' ref={aboutRef}>
        <About />
      </div>
      <div className='section' ref={projectsRef}>
        <Projects />
      </div>
      <div className='section' ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}

export default Home;
