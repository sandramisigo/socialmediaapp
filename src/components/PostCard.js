import React, { useState } from "react";
import './PostCard.css';

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);  // Initialize likes to 0 for each post

  const handleLike = () => {
    setLikes(likes + 1);  // Increment likes when the button is clicked
  };

  // Check if post.media exists and is an array before using .map
  const media = post.media || [];  // Default to an empty array if media is undefined

  return (
    <div className="postCard">
      <h3>{post.user}</h3>
      <p>{post.content}</p>
      <div className="postMedia">
        {/* Display photos */}
        {media.length > 0 && media.map((item, index) => (
          item.type.startsWith("image") ? (
            <img key={index} src={URL.createObjectURL(item)} alt={`media-${index}`} />
          ) : (
            <video key={index} controls>
              <source src={URL.createObjectURL(item)} type={item.type} />
              Your browser does not support the video tag.
            </video>
          )
        ))}
      </div>
      
      {/* Like button */}
      <div className="likeButtonContainer">
        <button onClick={handleLike} className="likeButton">
          👍 Like {likes > 0 && `(${likes})`}  {/* Show the number of likes if greater than 0 */}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
