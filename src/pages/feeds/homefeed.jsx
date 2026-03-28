import { useState } from "react";
import './homefeed.css'
import { Navigate } from "react-router-dom";
import plus_icon from '../../assets/plus.svg';
import story1 from "../../assets/images/story-1.jpg"
import story2 from "../../assets/images/story-2.jpg"
import story3 from "../../assets/images/story-3.jpg"
import story4 from "../../assets/images/story-4.jpg"
import story5 from "../../assets/images/story-5.jpg"
import story6 from "../../assets/images/story-6.jpg"
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

import post1 from "../../assets/images/feed-1.jpg"
import post2 from "../../assets/images/feed-2.jpg"
import post3 from "../../assets/images/feed-3.jpg"
import post4 from "../../assets/images/feed-4.jpg"
import post5 from "../../assets/images/feed-5.jpg"
import post6 from "../../assets/images/feed-6.jpg"

import search_icon from "../../assets/search.svg"
import headphone from "../../assets/headphones.svg"
import option from "../../assets/ellipsis-h.svg"
import { UilHeart } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import { UilStore } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'



function HomeFeed() {

    const[status, setStatus] = useState(false);
    const[search, setSearch] = useState(false);
    const[notification, setNotification] = useState(false);

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
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story2} alt="" />
                        </div>
                        <div>Hellen</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story3} alt="" /></div>
                        <div>Chris</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story4} alt="" /></div>
                        <div>Joseph</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story5} alt="" /></div>
                        <div>Julius</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story6} alt="" /></div>
                        <div>Angel</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story3} alt="" /></div>
                        <div>Ivy</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story1} alt="" /></div>
                        <div>Hanah</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story2} alt="" /></div>
                        <div>Felix</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story2} alt="" /></div>
                        <div>Felix</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story2} alt="" /></div>
                        <div>Felix</div>
                    </div>
                    <div className="status"
                        onClick={()=>{
                            setStatus(true)
                        }}
                    >
                        <div className="status-image">
                            <img src={story2} alt="" /></div>
                        <div>Felix</div>
                    </div>
                
            </div>
            {/*FEED POST*/}
            <div className="post-cards">
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile11} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Gerrard Antwi
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 100 • ComputerScience UPS</span>
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
                        <img src={post5} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Gerrard Antwi   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile1} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Josphine Asante
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 400 • Information Tech UPS</span>
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
                        <img src={post1} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Josphine Asante   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile2} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Linda Organ
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 200 • Comunication Tech UPS</span>
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
                        <img src={post2} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Linda Organ   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile3} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Yaa Asantewaa
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 200 • ComputerScience UPS</span>
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
                        <img src={post3} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Gerrard Antwi   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile11} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Gerrard Antwi
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 100 • ComputerScience UPS</span>
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
                        <img src={post5} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Gerrard Antwi   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
                <div className="card">
                    <div className="post-header">
                        <div className="left-header">
                            <div className="profile">
                                <img src={profile10} alt="" />
                            </div>
                            <div className="post-info">
                                <div className="username-time">
                                    <div className="user-name">
                                        Ndewura Jakpa
                                    </div>
                                    <div className="post-time">
                                        12:13pm
                                    </div>
                                </div>
                                <div className="sound">
                                    <span className="sound-title">Lvl 100 • ComputerEng UPS</span>
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
                        <img src={post6} alt="" />
                    </div>
                    <div className="post-btns">
                        <div className="left-btns">
                            <UilHeart className="left-btn-icons" /><span>16.8k</span>
                            <UilCommentAltDots className="left-btn-icons" /><span>11.2k</span>
                            <UilMessage className="left-btn-icons" /><span>8060</span>
                        </div>
                        <div className="left-follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="post-discription">
                        <span>Ndewura Jakpa   </span>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Rem modi harum ex
                    </div>
                </div>
            </div>
        </div>

        </>
    )


};

export default HomeFeed;