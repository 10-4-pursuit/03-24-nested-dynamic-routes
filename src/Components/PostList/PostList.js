import React from "react";
import { Link } from 'react-router-dom';
import blog from '../data/blog.json';    

function PostList() {
    const blogPosts = blog.posts

    return(
        <div>
            <h2>Posts: </h2>
            <ul>
                {Object.keys(blogPosts).map((postId) =>
                    <li key={postId}>
                        <Link to={`/blog/${postId}`}>{blogPosts[postId].title + ': ' + blogPosts[postId].summary}</Link>
                    </li>
                )}
            </ul>
        </div>
    )

}

export default PostList;