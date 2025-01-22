import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeedPage from "./components/FeedPage";
import ProfilePage from "./components/ProfilePage";
import NotificationPage from "./components/NotificationPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
