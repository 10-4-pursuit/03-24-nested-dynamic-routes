### Explanation

1. **Imports**: The code begins by importing necessary React features and other components. It also imports the blog data and CSS for styling.

2. **`App` Component**:
    - This is the main component of the application.
    - It uses `Router` to handle navigation within the app.
    - Inside the `Router`, `Routes` are defined.
    - A specific `Route` is set for the `/blog` path. This route renders the `Blog` component.
        - Inside `Blog`, two nested routes are defined:
            - The default route (`index`) renders `PostList` which lists all blog posts.
            - The `:postId` route renders `PostDetail`, showing details for a specific post based on the URL parameter.

3. **`Blog` Component**:
    - This component displays a header and uses `Outlet` to render nested routes. `Outlet` is a placeholder for the nested routes defined in the `App` component.

4. **`PostDetail` Component**:
    - It takes a list of posts as a prop.
    - Retrieves the `postId` from the URL using `useParams`.
    - Finds the corresponding post based on the `postId` and displays its details.
    - If no post is found for the given `postId`, it displays a "Post Not Found!" message.

5. **`PostList` Component**:
    - Receives the list of posts as a prop.
    - Iterates over the list of posts, creating a link to each post's detail page.
    - Displays the title and summary of each post.

6. **Exporting Components**: Finally, all these components (`App`, `Blog`, `PostDetail`, `PostList`) are exported so they can be used elsewhere in the application.

This structure allows for a navigable blog where users can see a list of posts and click on each post to view its details. The use of React Router enables smooth navigation without page reloads.