import React, { useRef } from 'react';
import './App.css';
import About from './components/about/About';
import NavBar from './components/nav-bar/NavBar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Copyright from './components/copyright/Copyright';

function App() {

  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  function scrollToProjects() {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  return (
    <div className="App">
      <NavBar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} />
      <div className="section" ref={aboutRef}>
        <About />
      </div>
      <div className="section" ref={projectsRef}>
        <Projects />
      </div>
      <div className="section" ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}

export default App;
