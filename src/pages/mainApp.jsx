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
import ViewStory from "./popUps/viewstory";
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





  // STATE FOR STORIES/STATUS
const [activeUser, setActiveUser] = useState(null);
const [showViewer, setShowViewer] = useState(false);

const handleStatusClick = (item) => {
  setActiveUser(item); 
  setShowViewer(true); 
};


  const [statusData, setStatusData] = useState([
  { id: 1,
     name: "helen",
     story: story1,
     viewed: true,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
     },

  { id: 2,
     name: "jane",
     story: story2,
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
      },

  { id: 3,
     name: "mary",
     story: story3,
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
      },

  { id: 4,
     name: "john",
     story: story4,
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
      },

  { id: 5,
     name: "alice", 
     story: story5, 
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
     },

  { id: 6,
     name: "bob", 
     story: story6, 
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
    },

  { id: 7,
     name: "charlie", 
     story: story1, 
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
    },

  { id: 8,
     name: "dave",
     story: story2,
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
      },

  { id: 9,
     name: "eve", 
     story: story3, 
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
    },

  { id: 10,
     name: "frank", 
     story: story4, 
     viewed: false,
     stories: [
      { id: "h1", image: story2, timestamp: "2h ago" },
      { id: "h2", image: story1, timestamp: "1h ago" },
      { id: "h3", image: story3, timestamp: "30m ago" }
    ]
     },
]);

// The function to flip 'viewed' to true
const handleViewStatus = (clickedId) => {
  setStatusData(oldList => oldList.map(eachPerson => 
    eachPerson.id === clickedId ? { ...eachPerson, viewed: true } : eachPerson
  ));
};



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
      {showViewer && activeUser && (
        <ViewStory 
          name={activeUser.name}
          profilePic={activeUser.story}
          timestamp={activeUser.stories[0]?.timestamp}
          stories={activeUser.stories}
          onClose={() =>{ 
            handleViewStatus(activeUser.id);
            setShowViewer(false)}}
        />
      )}
      <Routes>
          {/* This line makes Home the default */}
        <Route index element={
          <HomeFeed 
            posts={postsData} 
            statusData={statusData} 
            onStatusClick={handleStatusClick} 
            onToggleLike={handleToggleLike} 
            onAddComment={handleAddComment} 
          />
      } />
  
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