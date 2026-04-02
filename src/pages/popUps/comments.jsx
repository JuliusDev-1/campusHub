import { useState } from "react";
import './comment.css';
import { UilHeart, UilMessage, UilTimes } from '@iconscout/react-unicons';





function CommentsPopup({ setAccessComment, comments, onAddComment }) {
  const [commentInput, setCommentInput] = useState("");

  const handlePost = () => {
    if (commentInput.trim() !== "") {
      onAddComment(commentInput);
      setCommentInput(""); // Clears the input box after sending
    }
  };

  return (
    <div className="comment-popup">
      <div className="comment-header">
        <div></div>
        <div>Comments</div>
        <div><UilTimes className="close-icon" onClick={() => setAccessComment(false)} /></div>
      </div>
      
      <div className="comment-body">
        {comments.map((c) => (
          <Comment key={c.id} {...c} comment={c.text} />
        ))}
      </div>

      <div className="comment-footer">
        <input 
          type="text" 
          placeholder="Write a comment..." 
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <UilMessage className="message-icon" onClick={handlePost} />
      </div>
    </div>
  );
}

function Comment({ profile, name, comment, level, replies, time }) {
  return (
    <div className="comment-content">
      <div className="user-comment">
        <div className="left-side">
          <div className="user-profile profile">
            <img src={profile} alt="" />
          </div>
          <div className="user-message-info">
            <div className="user-info">
              <span className="name">{name}</span>
              <span className="level">{level}</span>
              <span className="time">{time}</span>
            </div>
            <div className="message">{comment}</div>
          </div>
        </div>
      </div>
      <div className="replies-likes">
        <div>{replies || "0 replies"}</div>
        <div className="like-comment">
          <UilHeart className="heart-icon" />
        </div>
      </div>
    </div>
  );
}

export default CommentsPopup;