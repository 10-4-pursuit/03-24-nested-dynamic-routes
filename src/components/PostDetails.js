import React from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "../data/blog.json";

function PostDetail () {
    const { postId } = useParams();

    const postInfo = blogData.posts[postId];

    const leftId = parseInt(postId) - 1;
    const rightId = parseInt(postId) + 1;

    const leftInfo = blogData.posts[leftId];
    const rightInfo = blogData.posts[rightId];

    return (
        <div>
            <h1>Post Details</h1>
            <p>{postInfo.content}</p>
            <p>{postInfo.date}</p>
            {leftInfo && <Link to={`/blog/${leftInfo}`}><strong>{leftInfo.title}</strong></Link>}
            <br />
            {rightInfo && <Link to={`/blog/${rightInfo}`}><strong>{rightInfo.title}</strong></Link>}
            <br />
            <Link to="/">Back</Link>
        </div>
    //     <div>
    //   {/* <h2>{postInfo.title}</h2>
    //   <p>{postInfo.content}</p>
    //   <p>Author: {postInfo.author}</p>
    //   <p>Date: {postInfo.date}</p>
    //   {/* Add more details as needed */}
    // </div> */}
    );
}

export default PostDetail;