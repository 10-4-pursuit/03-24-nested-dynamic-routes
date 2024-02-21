import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PostList from "./components/PostList.js";
import blogData from "./data/blog.json";
import PostDetails from "./components/PostDetails.js";

function App() {
  const [posts, setPost] = useState(blogData.posts);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
        <div>
          <h1>My Blog Posts</h1>
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/blog/:postId" element={<PostDetails />} />
          </Routes>
        </div>
        </Router>
      
      </header>
    </div>
  );
}

export default App;