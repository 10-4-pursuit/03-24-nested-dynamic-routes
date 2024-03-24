import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Router>
        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/blog/:postId" element={<PostDetail />} />
          {/* <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} />
          <Route path="/" element={<PostDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Blog;
