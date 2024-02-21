import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blog.json";

function PostList({ posts }) {
  return (
    <div>
      <h1>BlogPost List</h1>
      <ul>
        {Object.keys(posts).map((postId) => {
            console.log(post)
          const post = posts[postId];
          return (
            <li key={postId}>
              <Link to={`/blog/${postId}`}><strong>{post.title}</strong> - {post.summary} - $
              {post.author}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostList;