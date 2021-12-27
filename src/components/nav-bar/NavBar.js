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
        <p className="home" onClick={props.scrollToAbout}>home</p>
        <p onClick={toBlog}>blog</p>
        <a className="externalNav" href={externalNavLinks.github} title="Github" target="_blank" rel="noreferrer">
          <p>github</p>
        </a>
        <a className="externalNav" href={externalNavLinks.linkedIn} title="LinkedIn" target="_blank" rel="noreferrer">
          <p>linkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
