import data from '../data/blog.json';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    let { postId } = useParams();
    const { posts } = data;
    const targetPost = posts[postId];
    return (
            <div className={`posts-detail post-${postId}`} id={`post-${postId}`}>
                <p>{targetPost.title}</p>
                <p>{targetPost.summary}</p>
                <p>{targetPost.content}</p>
                <p>{targetPost.author}</p>
                <p>{targetPost.date}</p>
                <p>{targetPost.tags}</p>
            </div>
    )
}
export default PostDetail;