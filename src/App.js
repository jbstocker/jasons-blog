import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Blog from './components/blog/Blog'
import blogPosts from './components/blog/posts/content'
import Post from './components/blog/Post';

const getBlogs = () => {
  const postRoutes = blogPosts.map((posts) => {
    return (
      <Route key={posts.url} path={`/blog/${posts.url}`} element={<Post postData={posts}/>} />
    )
  })
  return (
    postRoutes
  )
}

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {getBlogs()}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
