import React from 'react'
import blogData from './data/blog.json'
import { useParams, Link} from 'react-router-dom'


function PostDetail() {
    const {postID} = useParams()
    const dataArray = Object.values(blogData.posts)
    const post = dataArray.find(p=> p.title === postID)
  return (
    <div>
    <h1>{post.title} by {post.author}</h1>
    <h2>Summary:{post.summary}</h2>
    <h3>Content:{post.content}</h3>
    <h4>Date:{post.date}</h4>
    <h5>Tags:{post.tags}</h5>
    <Link to="/blog">Back to Blog</Link>
    </div>
  )
}

export default PostDetail