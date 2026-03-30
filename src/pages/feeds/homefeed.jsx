import { useState } from "react";
import './homefeed.css'
import { Navigate } from "react-router-dom";
import plus_icon from '../../assets/plus.svg';
import { UilStore } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import Post from "./post";
import Status from "./status";
import CommentsPopup from "../popUps/comments";
import story1 from "../../assets/images/story-1.jpg"
import story2 from "../../assets/images/story-2.jpg"
import story3 from "../../assets/images/story-3.jpg"
import story4 from "../../assets/images/story-4.jpg"
import story5 from "../../assets/images/story-5.jpg"
import story6 from "../../assets/images/story-6.jpg"
import post1 from "../../assets/images/feed-1.jpg"
import post2 from "../../assets/images/feed-2.jpg"
import post3 from "../../assets/images/feed-3.jpg"
import post4 from "../../assets/images/feed-4.jpg"
import post5 from "../../assets/images/feed-5.jpg"
import post6 from "../../assets/images/feed-6.jpg"
import profile11 from "../../assets/images/profile-11.jpg"
import profile10 from "../../assets/images/profile-10.jpg"
import profile9 from "../../assets/images/profile-9.jpg"
import profile8 from "../../assets/images/profile-8.jpg"
import profile7 from "../../assets/images/profile-7.jpg"
import profile6 from "../../assets/images/profile-6.jpg"
import profile5 from "../../assets/images/profile-6.jpg"
import profile4 from "../../assets/images/profile-4.jpg"
import profile3 from "../../assets/images/profile-3.jpg"
import profile2 from "../../assets/images/profile-2.jpg"
import profile1 from "../../assets/images/profile-1.jpg"



function HomeFeed() {

    const[search, setSearch] = useState(false);
    const[notification, setNotification] = useState(false);
    const[accessComment, setAccessComment] = useState(false);
    

    if(accessComment === true){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }
    

    return(
        <>
        {/*NAV BAR*/}
        <div className="homePage-nav">
                <div className="logo">UPS-Hub</div>
                <div>
                    <UilSearch className ="search-btn"
                        onClick={()=>{
                            setSearch(true)
                        }}
                    />
                    <UilBell className="search-btn"
                        onClick={()=>{
                            setNotification(true)
                        }}
                     />
                </div>
                
        </div>
        {/*FEED STATUS*/}
        <div className="feed-container">
            <div className="status-container">

                    <div className="status add-status">
                        <div className="status-image add">
                            <img src={plus_icon} alt="" />
                        </div>
                        <div>Create</div>
                    </div>
                    <Status name={"helen"} story={story1} />
                    <Status name={"jane"} story={story2} />
                    <Status name={"john"} story={story3} />
                    <Status name={"jane"} story={story4} />
                    <Status name={"john"} story={story5} />
                    <Status name={"jane"} story={story6} />
                    <Status name={"john"} story={story1} />
                    <Status name={"jane"} story={story2} />
                    <Status name={"john"} story={story3} />
                    <Status name={"jane"} story={story4} />
                    <Status name={"john"} story={story5} />
                    <Status name={"elis"} story={story6} />
                    <Status name={"evelyn"} story={story1} />
                    <Status name={"emma"} story={story2} />
                    <Status name={"ethan"} story={story3} />
                    <Status name={"ella"} story={story4} />
            </div>
            {/*FEED POST*/}
            <div className="post-cards">
                <Post name={"Gerrard"} profile={profile1} post={post1} time="2 hours ago" level="Level 10" course="Computer Science" like="16.8k" comment="11.2k" message="8.06k" setAccessComment={setAccessComment}/>
                <Post name={"linda"} profile={profile2} post={post2} time="4 hours ago" level="Level 8" course="Mathematics"  comment="9.8k" message="6.2k" setAccessComment={setAccessComment}/>
                <Post name={"michael"} profile={profile3} post={post3} time="6 hours ago" level="Level 12" course="Physics" like="18.3k" comment="14.1k" message="9.5k" setAccessComment={setAccessComment}/>
                <Post name={"sarah"} profile={profile4} post={post4} time="8 hours ago" level="Level 6" course="Chemistry" like="10.7k" comment="8.3k" message="5.6k" setAccessComment={setAccessComment}/>
                <Post name={"david"} profile={profile5} post={post5} time="10 hours ago" level="Level 9" course="Biology" like="15.2k" comment="12.4k" message="8.1k" setAccessComment={setAccessComment}/>
                <Post name={"jennifer"} profile={profile6} post={post6} time="12 hours ago" level="Level 7" course="History" like="11.9k" comment="9.2k" message="6.8k" setAccessComment={setAccessComment}/>
                <Post name={"robert"} profile={profile7} post={post2} time="14 hours ago" level="Level 11" course="Literature" like="17.6k" comment="13.8k" message="9.9k" setAccessComment={setAccessComment}/>
                <Post name={"Josh"} profile={profile10} post={post3} time="16 hours ago" level="Level 5" course="Art" like="8.1k" comment="6.4k" message="4.2k" setAccessComment={setAccessComment}/>
                <Post  name={"zilda"} profile={profile11} post={post1} time="18 hours ago" level="Level 6" course="Music" like="9.3k" comment="7.1k" message="5.4k" setAccessComment={setAccessComment}/>
                <Post  name={"ivy"} profile={profile8} post={post2} time="20 hours ago" level="Level 7" course="Dance" like="10.5k" comment="8.2k" message="6.1k" setAccessComment={setAccessComment}/>
                {accessComment === true? <CommentsPopup />: null}

            </div>
        </div>

        </>
    )


};

export default HomeFeed;