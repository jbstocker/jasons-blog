import './NavBar.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function NavBar(props) {
  const navigate = useNavigate();
  const toBlog = () => {
    scrollToTop();
    navigate('/blog');
  }
  window.onscroll = () => {
    setTimeout(() => {
      if (window.pageYOffset < 5) {
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
        <h1 onClick={scrollToTop}>{props.title}</h1>
      </div>
      <div className="linkbar">
        <i className="fas fa-home" title="About" onClick={props.scrollToAbout}></i>
        {/* <i className="fas fa-project-diagram" title="Projects" onClick={props.scrollToProjects}></i> */}
        <i className="fas fa-blog" title="Blog" onClick={toBlog}></i>
        <a className="externalNav" href={externalNavLinks.github} title="Github" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a className="externalNav" href={externalNavLinks.linkedIn} title="LinkedIn" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
