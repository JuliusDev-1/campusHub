import { useState, useEffect } from "react";
import './homefeed.css';
import { useNavigate } from "react-router-dom";
import plus_icon from '../../assets/plus.svg';
import { UilBell, UilSearch } from '@iconscout/react-unicons';

import Post from "./post";
import Status from "./status";
import CommentsPopup from "../popUps/comments";

// Import your stories (Keeping these here is fine for now)
import story1 from "../../assets/images/story-1.jpg";
import story2 from "../../assets/images/story-2.jpg";
import story3 from "../../assets/images/story-3.jpg";
import story4 from "../../assets/images/story-4.jpg";
import story5 from "../../assets/images/story-5.jpg";
import story6 from "../../assets/images/story-6.jpg";
// ... (Keep all your other story imports here)

function HomeFeed({ posts, onToggleLike, onAddComment }) {
  const [accessComment, setAccessComment] = useState(false);
  const [activePostId, setActivePostId] = useState(null);

  // This finds the data for the post the user clicked on
  const activePost = posts.find(p => p.id === activePostId);

  return (
    <>
    <div className="homePage-nav">
                <div className="logo">UPS-Hub</div>
                <div>
                    <UilSearch className="search-btn" onClick={() => navigate('/main-app/search')} />
                    <UilBell className="search-btn" onClick={() => navigate('/main-app/notification')} />
                </div>
            </div>

            <div className="feed-container">
                {/* STORIES / STATUS BAR */}
                <div className="status-container">
                    <div className="status add-status">
                        <div className="status-image add">
                            <img src={plus_icon} alt="Add Status" />
                        </div>
                        <div>Create</div>
                    </div>
                    {/* You can map these later too, but static is fine for now */}
                    <Status name={"helen"} story={story1} />
                    <Status name={"jane"} story={story2} /> 
                    <Status name={"mary"} story={story3} />
                    <Status name={"john"} story={story4} />
                    <Status name={"alice"} story={story5} />
                    <Status name={"bob"} story={story6} />
                </div>

      <div className="post-cards">
        {posts && posts.map((item) => (
          <Post 
            key={item.id}
            profile={item.profile}
            post={item.post}
            name={item.name}
            time={item.time}
            level={item.level}
            course={item.course}
            // IMPORTANT: Matching your Post.jsx prop names
            likeCount={item.likeCount} 
            isLiked={item.isLiked}
            comment={item.commentCount} // Using the count from the bank
            message={item.message}
            
            onLike={() => onToggleLike(item.id)}
            
            // This function opens the popup AND tells it which post ID to use
            setAccessComment={() => {
                setActivePostId(item.id);
                setAccessComment(true);
            }}
          />
        ))}

        {/* --- COMMENTS POPUP --- */}
        {accessComment && (
          <CommentsPopup 
            setAccessComment={setAccessComment} 
            // We send only the comments for the active post
            comments={activePost?.comments || []}
            // We send a function that knows WHICH post to add the comment to
            onAddComment={(text) => onAddComment(activePostId, text)}
          />
        )}
      </div>
    </div>
    </>
  );
}

export default HomeFeed;