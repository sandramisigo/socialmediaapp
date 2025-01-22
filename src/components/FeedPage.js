import React, { useState } from "react";
import PostCreator from "./PostCreator";
import PostCard from "./PostCard";
import './FeedPage.css';  // Import CSS

function FeedPage() {
  const [posts, setPosts] = useState([
    { id: 1, user: "John", content: "Hello World!", photos: [], video: null },
    { id: 2, user: "Jane", content: "React is awesome!", photos: [], video: null },
    { id: 3, user: "Alice", content: "Check out this video!", photos: [], video: "assets/video.mp4" },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="feedPage">
      <h1>News Feed</h1>
      <PostCreator onAddPost={addPost} />
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <button onClick={() => deletePost(post.id)} style={{ color: "red" }}>
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
}

export default FeedPage;
