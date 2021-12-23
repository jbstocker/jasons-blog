import './Contact.css';

function Contact() {

  const externalNavLinks = {
    github: 'https://github.com/jbstocker',
    linkedIn: 'https://www.linkedin.com/in/jason-stocker-6a9375a8/'
  };

  return (
    <div className="contact">
      <div className="text-container">
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

export default Contact;
