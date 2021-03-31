import React, { useRef } from 'react';
import './App.css';
import About from './components/about/About';
import Education from './components/education/Education';
import NavBar from './components/nav-bar/NavBar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  const aboutRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  function scrollToEducation() {
    educationRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  function scrollToProjects() {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  function scrollToContact() {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
  }

  return (
    <div className="App">
      <NavBar scrollToAbout={scrollToAbout} scrollToEducation={scrollToEducation} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
      <div className="section" ref={aboutRef}>
      <About />
      </div>
      <div className="section" ref={educationRef}>
      <Education/>
      </div>
      <div className="section" ref={projectsRef}>
      <Projects />
      </div>
      <div className="section" ref={contactRef}>
      <Contact />
      </div>
    </div>
  );
}

export default App;
