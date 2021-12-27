import Markdown from "markdown-to-jsx";
import NavBar from "../nav-bar/NavBar";
import Copyright from "../copyright/Copyright";
import Contact from "../contact/Contact";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Prism from "prismjs";
import './Post.css'
import './prism.css'

function Post(props) {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  }
  const [post, setPost] = useState('');
  const [contact, setContact] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    import(`./posts/${props.postData.contentFile}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => {
            setPost(res)
            setContact(() => <Contact />)
            setCopyright(() => <Copyright />)
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [props.postData.contentFile, props.postData.cover_image]);


  return (
    <div className="post">
      <NavBar title='JasonStocker.com/blog' scrollToAbout={toHome} scrollToProjects={toHome} />
      <img className='cover-image' src={props.postData.cover_image} alt={props.postData.cover_image_alt}></img>
      <h1>{props.postData.title}</h1>
      <h3>{props.postData.date}</h3>
      <div className="article">
        <Markdown>
          {post}
        </Markdown>
      </div>
      {contact}
      {copyright}
    </div>

  )
}

export default Post;