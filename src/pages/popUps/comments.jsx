import { useState } from "react";
import { useEffect } from "react";
import './comment.css';
import profile1 from "../../assets/images/profile-1.jpg"
import { UilHeart } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'



function CommentsPopup()  {     


    const[commentInput, setCommentInput] = useState("");
    const [commentData, setCommentData] = useState([]);

    

    const postComment = () => {

        if (commentInput.trim() === "") return; 

        const newComment = {
            id: Date.now(), 
            profile: profile1,
            text: commentInput,
            name: "Julius",
            level: "Level 100",
            replies: "0 replies",
            time: Date.now(),
            like: 0
        };

            setCommentData([newComment, ...commentData]);
        }
        let commentContent = commentData.map((commentUser) => (
                        <Comment key={commentUser.id} 
                        profile={commentUser.profile} 
                        name={commentUser.name} 
                        comment={commentUser.text} 
                        level={commentUser.level} 
                        replies={commentUser.replies} 
                        like={commentUser.like}  />
                    ))
    




    return(
        <>
        <div className="comment-popup">
            <div className="comment-header">
                <div></div>
                <div>Comments</div>
                <div>X</div>
            </div>
            <div className="comment-body">
                {commentContent}
            </div>
            <div className="comment-footer">
            <input type="text" 
            placeholder="Write a comment..." 
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            />
            <UilMessage className="message-icon"
                onClick={() => {
                    postComment()
                }}
            />
            </div>
        </div>
        </>
    )

}
export default CommentsPopup;

function Comment({profile, name, comment, level, replies, time}) {

    const[liked, setLiked] = useState(false);
    const[like, setLike] = useState(0);     


    return(
        <>
        <div className="comment-content">
                    <div className="user-comment">
                        <div className="left-side">
                            <div className="user-profile profile">
                                <img src={profile} alt="" />
                            </div>
                            <div className="user-message-info">
                                <div className="user-info">
                                    <div className="name">{name}</div>
                                    <div className="level">{level}</div>
                                    <div className="time">{time}</div>
                                </div>
                                <div className="message">{comment}</div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="replies-likes">
                        <div>{replies}</div>
                        <div className="like-comment">
                            <UilHeart className="heart-icon"
                                onClick={()=>{
                                    setComment(true)
                                }}
                            />
                            <span>{""}</span>
                        </div>
                    </div>
                </div>
        </>
    )}