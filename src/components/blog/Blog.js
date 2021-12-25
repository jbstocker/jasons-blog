import NavBar from "../nav-bar/NavBar";
import { useNavigate } from "react-router-dom";
import Copyright from "../copyright/Copyright";
import Contact from "../contact/Contact";
import './Blog.css'
import blogPosts from './posts/content'
import PostTile from './PostTile'

function Blog() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  }

  const postTiles = () => {
    return blogPosts.map((post) => {
      return (
        <div key={post.url} className="blog-tile" onClick={() => {navigate(`/blog/${post.url}`)}}>
          <PostTile key={post.url} title={post.title} excerpt={post.excerpt} imageUrl={post.cover_image} />
        </div>
      )
    })
  }

  return (
    <div>
      <NavBar title='JasonStocker.com/blog' scrollToAbout={toHome} scrollToProjects={toHome} />
      <div className="blog">
        <h1>Check out some posts below!</h1>
        <div className="blog-grid">
          {postTiles()}
        </div>
        <Contact />
        <Copyright />
      </div>
    </div>
  )
}

export default Blog;