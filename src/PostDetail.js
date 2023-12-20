import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data/blog.json';
import './PostDetail.css';

const PostDetail = () => {

  const { postId } = useParams();
  const post = data.posts[postId];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1> {post.title}</h1>
      <p>{post.summary}</p>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>Tags: {post.tags.join(', ')}</p>

      <nav>
       <Link to={`/blog`}>Back to Posts</Link>
      </nav>
    </div>
  );
};

export default PostDetail;
