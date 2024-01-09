import React from 'react'
import blogData from './data/blog.json'
import { Link } from 'react-router-dom'


const PostList = () => {
    const dataArray = Object.values(blogData.posts)
  return (
    <div>
        <ul>
            {dataArray.map((post) => (
                <li key={post.title}>
                    <h2>
                    <Link to={`/blog/${post.title}`}>{post.title}</Link>
                    </h2>
                    <p>{post.summary}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList