// Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Nav from './components/nav/Nav';
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
    // Getting data from api
    getData()
      .then((data) => {
        setPosts(data.data);
      });
  }, []);
  // Making delete fetch request to api
  const handleDelete = async(e, slug) => {
    e.preventDefault();
    try {
      // Making request using slug property
      const res = await fetch(`http://localhost:4001/api/v1/posts/${slug}`, {
        method: 'DELETE'
      });
      // Getting data from api
      getData()
        .then((data) => {
          setPosts(data.data)
        })
        .catch((err) => console.log('Unable to get updated data', err));
    } catch(err) {
      console.log('Unable to make delete request', err);
    }
  };
  // Looping through state to render posts
  const displayPosts = posts === null ? 'loading posts' : posts.map((post) => (
      <div className='blog-post post'>
        <div className='post__content'>
          <Link to={`/post/${post.slug}`}>
            <h4 className='post-title'>{post.title}</h4>
          </Link>
          <p className='post-content'>{post.content.substring(0, 15)}</p>
          <p className='post-info'>Author <span>{post.user}</span> Published on<span> {new Date(post.createdAt).toLocaleString()}</span></p>
        </div>
        <div className='post__btns'>
          <Link to={`/post/update/${post.slug}`}>Update</Link>
          <button className='btn form-btn-delete' onClick={(e) => handleDelete(e, post.slug)}>Delete</button>
        </div>
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