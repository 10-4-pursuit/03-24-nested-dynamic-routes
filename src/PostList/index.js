import {Link} from 'react-router-dom';
import data from '../data/blog.json';

const PostList = () => {
    const { posts } = data;
    for (const postId in posts) {
        posts[postId].id = postId
    }
    return (
        <ul>
            {Object.values(posts).map(post => (
                <div>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    <p>{post.summary}</p>
                </div>
            ))}
        </ul>
    )
}
export  default PostList;
