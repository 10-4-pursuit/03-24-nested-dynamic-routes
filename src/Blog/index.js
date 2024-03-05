import { Route, Routes } from 'react-router-dom';
import PostDetail from '../PostDetail';
import PostList from '../PostList';

function Blog() {
    return (
        <div className="App">
            <aside>
                <PostList />
            </aside>
            <Routes>
                <Route path='/blog/:postId' element={<PostDetail />} />
            </Routes>
        </div>
    )
}
export default Blog;