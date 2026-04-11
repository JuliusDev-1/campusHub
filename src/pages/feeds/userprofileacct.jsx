import './userprofileacct.css';
import { UilArrowLeft, UilUser, UilEllipsisH } from '@iconscout/react-unicons';
import { useState } from 'react';
import profile6 from "../../assets/images/profile-6.jpg"
import post4 from "../../assets/images/feed-4.jpg"


function UserProfile() {

    const [activeTab, setActiveTab] = useState('posts');




    return(<>
        <div className="user-profile">
            <div className='user-profile-background'>
                <div className="user-profile-nav">
                    <div></div>
                    <div className="right"><UilEllipsisH className = "option"/></div>
                </div>

            </div>
            <div className="user-profile-container">
                <div className="user-profile"><img src={profile6} alt="" /></div>
                <div className="user-name">
                    <span className="display-name">User Name</span>
                    <span className="acct-name">@user.name</span>
                    <span className="bio">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Voluptate mollitia, perferendis 
                        sit aliquam nesciunt, nobis similique est.
                    </span>
                    <div className="account-follows">
                        <div className="user-followers">
                            <span className='number-follows'>124k</span>
                            <span className='label'>Followers</span>
                        </div>

                        <div className="seporator"></div>

                        <div className="user-followings">
                            <span className='number-follows'>200</span>
                            <span className='label'>Following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="user-acct-feed">
                <div className="acct-feed-lable">
                    <div
                    onClick={()=>{
                        setActiveTab("posts")
                    }}>
                        <div className={activeTab === "posts" ? 'lable-name active-lable-name' :'lable-name'}>Posts</div>
                        <div className={ activeTab === "posts" ?'lable-underline active-lable-underline' : 'lable-underline'}></div>
                    </div>
                    <div
                    onClick={()=>{
                        setActiveTab("saved")
                    }}>
                        <div className={activeTab === "saved" ? 'lable-name active-lable-name' :'lable-name'}>Saved</div>
                        <div className={ activeTab === "saved" ?'lable-underline active-lable-underline' : 'lable-underline'}></div>
                    </div>
                    <div
                    onClick={()=>{
                        setActiveTab("repost")
                    }}>
                        <div className={activeTab === "repost" ? 'lable-name active-lable-name' :'lable-name'}>Reposts</div>
                        <div className={ activeTab === "reposts" ?'lable-underline active-lable-underline' : 'lable-underline'}></div>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default UserProfile;