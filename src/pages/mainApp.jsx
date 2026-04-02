import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import PageNavBar from "./comp/pagenavbar";
import HomeFeed from "./feeds/homefeed";
import FriendsFeed from "./feeds/friendsfeed";
import MarketPlace from "./feeds/marketplace";
import MessagesPage from "./feeds/messagespage"; 
import UserProfile from "./feeds/userprofileacct";
import SearchPage from "./feeds/searchpage";
import NotificationPage from "./feeds/notificationpage"; 
import story1 from "../assets/images/story-1.jpg"
import story2 from "../assets/images/story-2.jpg"
import story3 from "../assets/images/story-3.jpg"
import story4 from "../assets/images/story-4.jpg"
import story5 from "../assets/images/story-5.jpg"
import story6 from "../assets/images/story-6.jpg"
import post1 from "../assets/images/feed-1.jpg"
import post2 from "../assets/images/feed-2.jpg"
import post3 from "../assets/images/feed-3.jpg"
import post4 from "../assets/images/feed-4.jpg"
import post5 from "../assets/images/feed-5.jpg"
import post6 from "../assets/images/feed-6.jpg"
import profile11 from "../assets/images/profile-11.jpg"
import profile10 from "../assets/images/profile-10.jpg"
import profile9 from "../assets/images/profile-9.jpg"
import profile8 from "../assets/images/profile-8.jpg"
import profile7 from "../assets/images/profile-7.jpg"
import profile6 from "../assets/images/profile-6.jpg"
import profile5 from "../assets/images/profile-6.jpg"
import profile4 from "../assets/images/profile-4.jpg"
import profile3 from "../assets/images/profile-3.jpg"
import profile2 from "../assets/images/profile-2.jpg"
import profile1 from "../assets/images/profile-1.jpg" 

function MainApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login-signup");
  }, [navigate]);

  // THE BANK: State for posts, each with its own nested comments array
  const [postsData, setPostsData] = useState([
    { 
      id: 1, name: "Gerrard", profile: profile1, post: post1, 
      time: "2 hours ago", level: "Level 100", course: "Computer Science", 
      isLiked: false, likeCount: 16800, commentCount: "11.2k", message: "8.06k",
      comments: [
        { id: 101, name: "Linda", text: "UPSA to the world! 🚀", level: "Level 300", time: "1h ago", profile: profile2 },
        { id: 102, name: "Julius", text: "Love this! Go UPSA! 🔥", level: "Level 100", time: "45m ago", profile: profile3 },
      ]
    },
    { 
      id: 2, name: "Linda", profile: profile2, post: post2, 
      time: "4 hours ago", level: "Level 300", course: "Marketing", 
      isLiked: false, likeCount: 9800, commentCount: "2k", message: "1.2k",
      comments: [] 
    },
    { 
      id: 3, name: "Julius", profile: profile3, post: post3, 
      time: "6 hours ago", level: "Level 100", course: "Software Engineering", 
      isLiked: false, likeCount: 12000, commentCount: "3.5k", message: "2.1k",
      comments: [] 
    }
  ]);

  // THE TELLER (Likes): Logic to update like status
  const handleToggleLike = (postId) => {
    setPostsData(prev => prev.map(post => 
      post.id === postId ? { 
        ...post, 
        isLiked: !post.isLiked, 
        likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1 
      } : post
    ));
  };

  // THE TELLER (Comments): Logic to add a new comment to a specific post
  const handleAddComment = (postId, text) => {
    setPostsData(prev => prev.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: Date.now(),
          name: "Julius", // This would eventually be the logged-in user
          profile: profile1, 
          text: text,
          level: "Level 100",
          time: "Just now",
          replies: "0 replies"
        };
        return { ...post, comments: [newComment, ...post.comments] };
      }
      return post;
    }));
  };
  

  return (
    <>
     
       <Routes>
          {/* This is the magic line - it makes Home the default */}
         <Route index element={<HomeFeed posts={postsData} onToggleLike={handleToggleLike} onAddComment={handleAddComment}/>} />
  
          <Route path="friends-feed" element={<FriendsFeed />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationPage />} />
      </Routes>

      <PageNavBar />
    </>
  );
}
export default MainApp;