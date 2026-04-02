import { UilHeart, UilMessage, UilCommentAltDots } from '@iconscout/react-unicons'
import option from "../../assets/ellipsis-h.svg"
import "./post.css"

// We added isLiked, likeCount, and onLike to your props
function Post({ 
    profile, post, name, time, level, course, comment, 
    message, setAccessComment, isLiked, likeCount, onLike 
}) {

    return (
        <div className="card">
            <div className="post-header">
                <div className="left-header">
                    <div className="profile">
                        <img src={profile} alt="" />
                    </div>
                    <div className="post-info">
                        <div className="username-time">
                            <div className="user-name">{name}</div>
                            <div className="post-time">{time}</div>
                        </div>
                        <div className="sound">
                            <span className="sound-title">{level} • {course}</span>
                        </div>
                    </div>
                </div>
                <div className="right-header">
                    <div className="post-option">
                        <img src={option} alt="" />
                    </div>
                </div>
            </div>

            <div className="post-file">
                <img src={post} alt="" />
            </div>

            <div className="post-btns">
                <div className="left-btns">
                    {/* We use onLike and isLiked from the props now! */}
                    <UilHeart 
                        className={isLiked ? "like-btn liked" : "like-btn"} 
                        onClick={onLike} 
                    />
                    <span>{likeCount}</span>

                    <UilCommentAltDots 
                        className="left-btn-icons"
                        onClick={() => setAccessComment(true)}
                    />
                    <span>{comment}</span>

                    <UilMessage className="left-btn-icons"/>
                    <span>{message}</span>
                </div>
                <div className="left-follow-btn">
                    <button>Follow</button>
                </div>
            </div>

            <div className="post-discription">
                <span>{name} </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi harum ex
            </div>
        </div>
    );
}

export default Post;