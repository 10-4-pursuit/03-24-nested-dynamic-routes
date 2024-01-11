import React from "react";
import { useParams, Link } from 'react-router-dom';
import blogData from './data/blog.json';

const PostDetails = () => {
    const { postId } = useParams();
    const post = blogData.posts[postId];
  
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
        <p>Tags: {post.tags.join(', ')}</p>
        <footer>
                <Link to="/">Back</Link>
            </footer>
      </div>
      
    );
  };

export default PostDetails;