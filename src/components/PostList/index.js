// Importing necessary libraries and components
import React from "react";
import { Link } from 'react-router-dom';

// Defining the PostList component
function PostList({ posts }) {
    return (
        <div>
            {Object.keys(posts).map(postKey => (
                <div key={postKey}>
                    {/* Listing each post as a link */}
                    <h2>
                    <Link to={`/blog/${postKey}`}>{posts[postKey].title}</Link>
                    </h2>
                    <p>{posts[postKey].summary}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;
