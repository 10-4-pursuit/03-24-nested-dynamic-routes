import { useParams, BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import blogData from '../src/data/blog.json'; 
import './App.css';

function App() { 
  return (
    <Router>
      <div>
        <nav>
          <Link to='/blog'>Blog Posts</Link>
        </nav>
        <Routes>
          <Route path='/blog' element={<PostList />} />
          <Route path='/blog/:postId' element={<PostDetail />} />
        </Routes>
      </div>
    </Router>  
  );
}


function PostList() {
  return (
    <div>
      <h1>Blog Posts</h1>
      {Object.keys(blogData.posts).map((postId) => {
      const post = blogData.posts[postId];
      return (
      <div key={postId}>
        <Link to={`/blog/${postId}`}>{post.title}</Link>
        <p>{post.summary}</p>
      </div>
      );
    })}
    </div>
  );
}

function PostDetail() {
  let { postId } = useParams();
  const post = blogData.posts[postId];
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>Tags: {post.tags.join(', ')}</p>
    </div>
  );
}
export default App;
