// Dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    // Req params
    const { slug } = useParams();
    // State
    const [post, setPost] = useState(null);
    // Function to fetch single post
    const getData = async() => {
        // Making fetch request
        const res = await fetch(`http://localhost:4001/api/v1/posts/${slug}`);
        const data = await res.json();
        return data;
    };
    useEffect(() => {
        getData()
            .then((data) => {
                setPost(data.data);
            })
            .catch((err) => {
                console.log('Error unable to get post');
            })
    }, []);
    return (
        <div className='single-post'>            
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>Author: <span>{post.user}</span> Post Date: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
    )
};

export default SinglePost;