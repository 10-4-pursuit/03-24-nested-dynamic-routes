// Importing necessary libraries and components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import posts from './data/blog.json'; // Importing blog data
import './App.css'; // Importing styling

// Defining the main App component
function App() {
  // Rendering the App component
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* Setting up the Router for navigation */}
          <Routes>
            {/* Defining Routes for the application */}
            <Route path="/blog" element={<Blog />}>
              {/* Route for the blog section */}
              <Route index element={<PostList posts={posts.posts} />} />
              {/* Default route to show PostList */}
              <Route path=":postId" element={<PostDetail posts={posts.posts} />} />
              {/* Route for individual posts' details */}
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
