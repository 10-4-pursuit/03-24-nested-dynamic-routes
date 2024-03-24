import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./data/blog.json";


const PostDetail = () => {
    const {postId} = useParams()
  const post = blogData.posts[postId]

  if (!post) {
    return <div>Post not found.</div>
  }
 

  return (
    <div>
          <p>{post.title}</p>
          <p>{post.summary}</p>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <p>{post.date}</p>
          <p>{post.tags}</p>
        
      
    </div>
  );
};

export default PostDetail;
