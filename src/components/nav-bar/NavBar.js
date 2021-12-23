import './NavBar.css';
import { useState } from 'react';

function NavBar(props) {
  window.onscroll = () => {
    setTimeout(() => {
      if (window.pageYOffset === 0) {
        setExpanded('navbar expanded');
      } else {
        setExpanded('navbar collapsed');
      }
    }, 0);
  };

  const [expanded, setExpanded] = useState('navbar expanded');

  const externalNavLinks = {
    github: 'https://github.com/jbstocker',
    linkedIn: 'https://www.linkedin.com/in/jason-stocker-6a9375a8/'
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${expanded}`}>
      <div className="title">
        <i className="fas fa-code" onClick={scrollToTop}></i>
        <h1 onClick={scrollToTop}>JasonStocker.com</h1>
      </div>
      <div className="linkbar">
        <i className="fas fa-user" title="About" onClick={props.scrollToAbout}></i>
        <i className="fas fa-project-diagram" title="Projects" onClick={props.scrollToProjects}></i>
        <a href={externalNavLinks.github} title="Github" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href={externalNavLinks.linkedIn} title="LinkedIn" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
