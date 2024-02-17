import {useParams, Link  } from 'react-router-dom';
import data from './data/blog.json'

function PostDetail() {
    const { postId } = useParams();
    const post = data.posts[postId]

    if (!post) {
        return <div>Post not found</div>
    }
    return <div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <p>{post.content}</p>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.tags.join(', ')}</p>

        <nav>
       <Link to={`/blog`}>Back to Posts</Link>
      </nav>
    </div>
    
}

export default PostDetail