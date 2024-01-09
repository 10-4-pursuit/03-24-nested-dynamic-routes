import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<h1>Welcome! Use the URL(/blog)</h1>}></Route>
          <Route path='/blog' element={<PostList />}></Route>
          <Route path='/blog/:postID' element={<PostDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
