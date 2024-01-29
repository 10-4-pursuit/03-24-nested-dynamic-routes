import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PostList from './Components/PostList';
import PostDetail from './Components/PostDetail';
import blogData from './data/blog.json';

function App() {
  const [post, setPost] = useState(blogData.posts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <h1>People Post Blog</h1>
            <Routes>
              <Route path="/" element={<PostList post={post} />} />
              <Route path="/blog/:postId" element={<PostDetail />} />
            </Routes>
          </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
