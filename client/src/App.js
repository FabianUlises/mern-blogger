// Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Nav from './components/nav/Nav';
// Styles
import './App.css';

function App() {
  // State
  const [posts, setPosts] = useState(null);
  // Fetching posts api
  const getData = async() => {
    // Making fetch requests
    const res = await fetch('http://localhost:4001/api/v1/posts');
    const data = await res.json();
    return data;
  };
  // Useeffect
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data.data);
      });
  }, []);
  // Looping through state to render posts
  const displayPosts = posts === null ? 'loading posts' : posts.map((post) => (
      <div className='blog-post'>
        <Link to={`/post/${post.slug}`}>
          <h4 className='post-title'>{post.title}</h4>
        </Link>
        <p className='post-content'>{post.content.substring(0, 15)}</p>
        <p className='post-info'>Author <span>{post.user}</span> Published on<span> {new Date(post.createdAt).toLocaleString()}</span></p>
      </div>
  ));
  return (
    <div className="App">
      <Nav />
      {displayPosts}
    </div>
  );
}

export default App;