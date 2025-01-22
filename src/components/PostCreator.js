import React, { useState } from "react";
import './PostCreator.css'; // Import the CSS file

function PostCreator({ onAddPost }) {
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);  // Renamed photos and video to media for both

  const handleMediaChange = (e) => {
    const files = e.target.files;
    const newMedia = [...media, ...Array.from(files)];
    setMedia(newMedia);
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      user: "User",  // You can dynamically assign the username here
      content: text,
      media,  // Using the combined media array
    };
    onAddPost(newPost);  // Pass the new post to the parent
    setText("");
    setMedia([]);
  };

  return (
    <div className="postCreator">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <div>
        {/* Single input for both image and video files */}
        <input
          type="file"
          multiple
          onChange={handleMediaChange}
          accept="image/*, video/*"  // Accept both image and video files
        />
      </div>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default PostCreator;
