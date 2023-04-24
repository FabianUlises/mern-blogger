// Dependencies
import React, { useState, useEffect } from 'react';
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
    const res = await fetch('http://localhost:4001/api/v1/posts/all');
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
        <h4>Blog title</h4>
        <p>Blog content</p>
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