// Dependencies
import React, { useState } from 'react';

const Create = () => {
    // State
    const [post, setPost] = useState({
        title: '',
        content: '',
        user: ''
    });
    // Function to post data to db
    const postData = async(e) => {
        console.log('button pressed');
        e.preventDefault();
        try {
            console.log('fetching post request');
            // Fetching for post request
            const res = await fetch('http://localhost:4001/api/v1/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            })
            if(res.status === 200) {
                console.log('posted');
                setPost({
                    title: '',
                    content: '',
                    user: ''
                });
            }
        } catch(err) {
            console.log('not posted');
            console.error('Unable to post data: ', err);
        }
    }
    return (
    <div className='form-container'>
        <form className='page-form'>
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
                <button type='submit' className='form-btn-submit' onClick={postData}>Submit</button>
            </div>
        </form>
    </div>
)
};

export default Create;