import './viewstory.css'
import profile1 from "../../assets/images/profile-1.jpg"
import { UilHeart, UilMessage, UilTimes } from '@iconscout/react-unicons';

function ViewStory({ name, stories, timestamp, onClose, onNext, onPrev, profilePic }) {


    return(
        <>
        <div className="story-container">
            <div className="progress-container">
                <div className="progress-bar-bg">
                     <div className="progress-bar-fill"></div>
                </div>
            </div>
            <div className="user-story-profile">
                <div className="left">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <div className="user-info">
                        <div className="username">{name}</div>
                        <div className="timestamp">{timestamp}</div>
                    </div>
                </div>
                <div className="right">
                    <UilTimes className="story-icon" />
                </div>
            </div>
             <div className="story-content">
                
             </div>
             <div className="story-nav">
                    <div className="current-story active"></div>
                    <div className="current-story"></div>
                    <div className="current-story"></div>
                    <div className="current-story"></div>
             </div>
        </div>
        </>
    )
}
export default ViewStory