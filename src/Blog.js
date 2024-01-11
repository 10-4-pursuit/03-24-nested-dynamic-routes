import React from "react";
import PostList from "./PostList";
import PostDetails from './PostDetails';
import { Route, Routes } from 'react-router-dom';


const Blog = () => {
    return (
      <div>
        <h1>My Blog</h1>
            <Routes>
                <Route path="/blog" element={<PostList />} />
                
                <Route path="/blog/:postId" element={<PostDetails />} />
            </Routes>
      </div>
    );
  };

export default Blog;