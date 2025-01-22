import React from "react";
import "./ProfilePage.css";

// Importing images for the profile
import ProfileBackground from "./assets/profilebackground.jpeg";
import MyProfileImage from "./assets/profile.jpeg";
import AliceProfile from "./assets/post6.jpeg";
import BobProfile from "./assets/Bobprofile.jpg";

// Importing images for the previous posts
import Post1 from "./assets/post1.jpeg";
import Post2 from "./assets/post2.jpeg";
import Post3 from "./assets/post3.jpeg";
import Post4 from "./assets/post4.jpeg";
import Post5 from "./assets/post5.jpeg";
import Post6 from "./assets/post6.jpeg";

function ProfilePage() {
  return (
    <div className="profileContainer">
      <div className="profileTop">
        <div className="profileCover">
          <img src={ProfileBackground} alt="Cover" className="profileCoverImg" />
          <img src={MyProfileImage} alt="Avatar" className="profileUserImg" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">SANDRA MISIGO</h4>
          <span className="profileInfoDesc">Loving life and coding!</span>
        </div>
      </div>

      <div className="profileBottom">
        <div className="profileBottomLeft">
          <h5 className="profileSectionTitle">About</h5>
          <p className="profileAboutText">
            Hello! I'm Sandra Misigo, a dedicated developer who enjoys building
            innovative social media platforms and inspiring others through knowledge sharing.
          </p>
        </div>
        <div className="profileBottomRight">
          <h5 className="profileSectionTitle">My Friends</h5>
          <div className="profileFriends">
            <div className="profileFriend">
              <img src={AliceProfile} alt="Friend" className="profileFriendImg" />
              <span className="profileFriendName">Ruth</span>
            </div>
            <div className="profileFriend">
              <img src={BobProfile} alt="Friend" className="profileFriendImg" />
              <span className="profileFriendName">Alex</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profilePosts">
        <h5 className="profileSectionTitle">Sandra's Posts</h5>
        <div className="postGrid">
          <img src={Post1} alt="Post 1" className="postImage" />
          <img src={Post2} alt="Post 2" className="postImage" />
          <img src={Post3} alt="Post 3" className="postImage" />
          <img src={Post4} alt="Post 4" className="postImage" />
          <img src={Post5} alt="Post 5" className="postImage" />
          <img src={Post6} alt="Post 6" className="postImage" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
