// Dependencies
import React from 'react';

const Create = () => {
  return (
    <div className='form-container'>
        <form className='page-form'>
            <div className='form-group'>
                <label for='postTitle' className='form-label'>Title</label>
                <input type='text' placeholder='Post title' required className='form-input' id='postTitle' />
            </div>
            <div className='form-group'>
                <label for='postContent' className='form-label'>Content</label>
                <textarea type='text' placeholder='Post content' required className='form-input' id='postContent' />
            </div>
            <div className='form-group'>
                <label for='postUser' className='form-label'>User</label>
                <input type='text' placeholder='Username' required className='form-input' id='postUser' />
            </div>
            <div className='form-btn-container'>
                <button type='submit' className='form-btn-submit'>Submit</button>
            </div>
        </form>
    </div>
  )
};

export default Create;