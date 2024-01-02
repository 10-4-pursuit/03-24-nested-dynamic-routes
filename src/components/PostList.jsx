import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json';

function PostList() {
//   const posts = Object.values(blogData.posts);
const posts = blogData.posts;

  return (
    <React.Fragment> 
    <h1>BLOG, BLOG, BLOG </h1>
    <ul style={{ listStyle: 'none'}}>
      {Object.keys(posts).map((post) => (
        <li key={post}>
          <Link to={`/blog/${post}`}>{posts[post].title}</Link>
          <p>{posts[post].summary}</p>
        </li>
      ))}
    </ul>
    </React.Fragment>
  );
}

export default PostList;