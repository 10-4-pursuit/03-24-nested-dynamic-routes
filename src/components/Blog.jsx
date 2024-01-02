import { Routes, Route } from 'react-router-dom';
import PostDetails from './PostDetails'; // Import PostDetail component
import PostList from './PostList';

function Blog() {
  
  return (
   
    <main className="blog-main">
      <Routes>
      {/* <Route path="/" element={Home} />  */}
        <Route path="/blog" element={<PostList />} /> {/* Base route for post list */}
        <Route path="/blog/:postId" element={<PostDetails />} /> {/* Dynamic route for post detail */}
      </Routes>
    </main>
    // ...
  );
}

const Home = () => {
    return (
  <div> 
  <h1>Home</h1>
  </div>
    )
   }
  

  export default Blog;