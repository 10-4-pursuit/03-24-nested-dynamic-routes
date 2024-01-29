import React from "react";
import { useEffect, useState } from "react";
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
            <p>Title: {postInfo.title}</p>
            <p>Summary: {postInfo.summary}</p>
            <p>Content: {postInfo.content}</p>
            <p>Author: {postInfo.author}</p>
            <p>Date: {postInfo.date}</p>
            <p>Tags: {postInfo.tags}</p>
            {leftInfo && <Link to={`/blog/${leftId}`}><strong>{leftInfo.title}</strong></Link>}
            <br />
            {rightInfo && <Link to={`/blog/${rightId}`}><strong>{rightInfo.title}</strong></Link>}
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default PostDetail;