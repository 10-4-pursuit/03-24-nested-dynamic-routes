import React from "react";
import PostList from "./PostList";
import PostDetails from './PostDetails';
import { Route, Routes, Link } from 'react-router-dom';


const Blog = () => {
    return (
      <div>
        <Link to="/blog"><h1>My Blog</h1></Link>
            <Routes>
                <Route path="/blog" element={<PostList />} />
                
                <Route path="/blog/:postId" element={<PostDetails />} />
            </Routes>
      </div>
    );
  };

export default Blog;