import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/blog" element={<PostList />} />
          <Route path="/blog/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




