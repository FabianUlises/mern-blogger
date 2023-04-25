// Dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
    // Req params
    const { slug } = useParams();
    // State
    const [post, setPost] = useState({
        title: '',
        content: '',
        slug: '',
        user: ''
    });
    // Function to fetch single post
    const getData = async() => {
        // Making fetch request
        const res = await fetch(`http://localhost:4001/api/v1/posts/${slug}`);
        const data = await res.json();
        return data.data;
    };
    useEffect(() => {
        getData()
            .then((data) => {
                setPost({
                    ...post,
                    title: data.title,
                    content: data.content,
                    slug: data.slug,
                    user: data.user
                });
            })
            .catch((err) => {
                console.log('Error unable to get post');
            })
    }, []);
    // Function to handle update post submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log('button pressed');
            const res = await fetch(`http://localhost:4001/api/v1/posts/${slug}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            });
            const data = await res.json();
            console.log('Post', data.data);
            console.log('Response', res);
        } catch(err) {
            console.log('Unable to submit request', err);
        }
    };
    // Displaying post if any
    const displayPost = post === null ? 'Loading post' : (
        <div className='single-post'>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>Author: <span>{post.user}</span> Post Date: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
    );
    return (
        <form className='page-form update-form'>
            <div className='form-group'>
                <label for='postTitle' className='form-label'>Title</label>
                <input value={post.title} type='text' placeholder='Post title' required className='form-input' id='postTitle' onChange={(e) => setPost({...post, title: e.target.value})} />
            </div>
            <div className='form-group'>
                <label for='postContent' className='form-label'>Content</label>
                <textarea value={post.content} type='text' placeholder='Post content' required className='form-input' id='postContent' onChange={(e) => setPost({...post, content: e.target.value})} />
            </div>
            <div className='form-group'>
                <label for='postUser' className='form-label'>User</label>
                <input value={post.user} type='text' placeholder='Username' required className='form-input' id='postUser' onChange={(e) => setPost({...post, user: e.target.value})} />
            </div>
            <div className='form-btn-container'>
                <button type='submit' className='form-btn-submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
};

export default UpdatePost;