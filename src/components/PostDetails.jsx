import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blog.json';

function PostDetails() {
  const { postId } = useParams();
  const post = blogData.posts[postId];
 

  return (
    <div className="post-detail">
      <p className="post-author">By {post.author} on {post.date}</p>
      <div className="post-tags">
        {post.tags.map((tag) =>  (
          <span key={tag} style={{ color:"red"}}className="tag">Tag:{tag}  </span>
        ))}
      </div>

      <div className="post-content">
       <p style={{ textDecoration: "underline"}}> {post.content} </p>
        </div>
      
      
    
    </div>
   
    
  );
}

export default PostDetails;