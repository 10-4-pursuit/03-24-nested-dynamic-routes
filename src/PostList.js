import React from "react";
import { Link } from 'react-router-dom';
import blogData from './data/blog.json';

const PostList = () => {
    return (
        <div>
          <h2>Post List</h2>
          <ul>
          {Object.keys(blogData.posts).map(postId => (
                    <li key={postId}>
                        <Link to={`/blog/${postId}`}>
                            <h3>{blogData.posts[postId].title}</h3>
                        </Link>
                        <p>{blogData.posts[postId].summary}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default PostList;