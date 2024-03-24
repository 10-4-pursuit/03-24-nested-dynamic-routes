import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import blogData from "./data/blog.json"

const PostList = () => {
    const [postList, setPostList] = useState([]);

useEffect(() => {
    setPostList(blogData.posts)
}, []);    

return (
    <ul>
        {Object.entries(postList).map(([key, post]) => (
            <li key={key}>
                <h3><Link to= {`/blog/${key}`}>{post.title}</Link></h3>
                <p>{post.summary}</p>
            </li>
        ))}
    </ul>
)

}
export default PostList;