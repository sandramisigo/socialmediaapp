import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import the NotificationsIcon
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"; // Like icon
import CommentIcon from "@mui/icons-material/Comment"; // Comment icon
import GroupAddIcon from "@mui/icons-material/GroupAdd"; // Friend request icon
import EventIcon from "@mui/icons-material/Event"; // Event notification icon
import PhotoIcon from "@mui/icons-material/Photo"; // Photo upload icon
import "./NotificationPage.css";

function NotificationPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "like", message: "Bob liked your post." },
    { id: 2, type: "comment", message: "Alice commented on your photo." },
    { id: 3, type: "friendRequest", message: "Charlie sent you a friend request." },
    { id: 4, type: "event", message: "You have an event invitation from Sarah." },
    { id: 5, type: "photo", message: "David uploaded a new photo." },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <ThumbUpAltIcon className="notificationIconType" />;
      case "comment":
        return <CommentIcon className="notificationIconType" />;
      case "friendRequest":
        return <GroupAddIcon className="notificationIconType" />;
      case "event":
        return <EventIcon className="notificationIconType" />;
      case "photo":
        return <PhotoIcon className="notificationIconType" />;
      default:
        return <NotificationsIcon className="notificationIconType" />;
    }
  };

  return (
    <div className="notificationContainer">
      <div className="notificationHeader">
        <NotificationsIcon className="notificationIcon" />
        <span className="notificationTitle">Notifications</span>
      </div>
      <ul className="notificationList">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className="notificationItem">
              <div className="notificationContent">
                {getIcon(notification.type)}
                <span className="notificationMessage">{notification.message}</span>
              </div>
              <CloseIcon
                className="closeIcon"
                onClick={() => removeNotification(notification.id)}
              />
            </li>
          ))
        ) : (
          <p className="noNotifications">No new notifications.</p>
        )}
      </ul>
    </div>
  );
}

export default NotificationPage;
