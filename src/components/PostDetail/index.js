// Importing necessary libraries and components
import React from 'react';
import { useParams } from 'react-router-dom';

// Defining the PostDetail component
function PostDetail({ posts }) {
    const { postId } = useParams(); // Getting the postId from the URL
    const post = posts[postId]; // Finding the post based on postId

    return (
        <div>
            {post ? (
                <div>
                     {/* Displaying post details */}
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>Author: {post.author}</p>
                    <p>Date: {post.date}</p>
                    <p>Tags: {post.tags.join(', ')}</p>
                </div>
            ) : (
                <p>Post Not Found!</p> // Showing message if post not found
            )}
        </div>
    );
};

export default PostDetail;