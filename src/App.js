import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PostList from './PostList';
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/blog">Blog</Link>
      </nav>
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
