import './userprofileacct.css';
import { UilArrowLeft, UilUser, UilEllipsisH } from '@iconscout/react-unicons';



function UserProfile() {
    return(
        <div className="user-profile-header">
            <div className="user-profile-container">
                <div className="user-profile"><UilUser className="user"/></div>
                <div className="user-name">
                    <span className="display-name">User Name</span>
                    <span className="acct-name">@user.name</span>
                    <span className="bio">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor.</span>
                </div>
            </div>
            <div className='user-profile-background'>
                <div className="user-profile-nav">
                    <div className="left"><UilArrowLeft className = "left-arrow"/></div>
                    <div className="right"><UilEllipsisH className = "option"/></div>
                </div>
            </div>
            

            
        </div>
    )
}
export default UserProfile;