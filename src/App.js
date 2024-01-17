import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Blog from './Components/Blog/Blog';
import PostDetails from './Components/PostDetail/PostDetails';
import PostList from './Components/PostList/PostList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to='/' />
            <Link to='/blog'>Posts</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/blog' element={<PostList />} />
            <Route path='/blog/:postId' element={<PostDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
