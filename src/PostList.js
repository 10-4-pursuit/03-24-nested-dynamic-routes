import data from './data/blog.json'
import { Link } from 'react-router-dom'


function PostList() {
    return <div>
        <h1>Blog Posts</h1>
        <ul>
            {Object.entries(data.posts).map(([postId, post]) => (
                <li key={postId}>
                    <Link to={`/blog/post/${postId}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default PostList