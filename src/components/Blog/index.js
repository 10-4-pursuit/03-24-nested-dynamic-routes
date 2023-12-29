// Importing necessary libraries and components
import React from "react";
import { Outlet } from 'react-router-dom';

// Defining the Blog component
function Blog() {
    return (
        <div>
            <h1>This Is My Blog</h1>
            <Outlet /> {/* Placeholder for nested routes */}
        </div>
    )
}

export default Blog;