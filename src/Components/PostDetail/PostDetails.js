import React from "react";
import blog from '../data/blog.json';
import { useParams } from 'react-router-dom';

function PostDetails() {
    const { postId } = useParams();

    const blogList = blog.posts[postId];

    return(
        <div>
            <h2>{blogList.title}</h2>
            <h3>{blogList.author}</h3>
            <p>{blogList.date}</p>
            <span>
                <p>
                    {blogList.content}
                </p>
            </span>
            <span>
                <p>
                    {blogList.tags}
                </p>
            </span>
        </div>
    )

}

export default PostDetails;