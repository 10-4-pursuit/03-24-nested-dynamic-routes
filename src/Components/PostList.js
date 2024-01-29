import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json';

const PostList = () => {
  const posts = blogData.posts;

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {Object.keys(posts).map(postId => (
          <li key={postId}>
            <Link to={`/blog/${postId}`}>{posts[postId].title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
