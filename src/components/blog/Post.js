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
  const [coverImage, setCoverImage] = useState('');

  useEffect(() => {
    Prism.highlightAll();
    import(`./posts/${props.postData.contentFile}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => {
            setPost(res)
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    setCoverImage(props.postData.cover_image)
  }, [props.postData.contentFile, props.postData.cover_image]);


  return (
    <div className="post">
      <NavBar title='JasonStocker.com/blog' scrollToAbout={toHome} scrollToProjects={toHome} />
      <img className='cover-image' src={coverImage} alt='cover'></img>
      <h2>{props.postData.title}</h2>
      <Markdown className='article'>
        {post}
      </Markdown>
      <Contact />
      <Copyright />
    </div>

  )
}

export default Post;