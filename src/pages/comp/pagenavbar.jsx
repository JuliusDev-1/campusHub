import './pagenavbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chat_icon from '../../assets/chat.svg';
import plus_icon from '../../assets/plus.svg';
import user_icon from '../../assets/user.svg';
import { UilStore } from '@iconscout/react-unicons'
import { UilFilm } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'


function PageNavBar() {
    const[homePage, setHomePage] = useState(true);
    const[friendsFeed, setFriendsFeed] = useState(false);
    const[marketPage, setMarketPage] = useState(false);
    const[chatPage, setChatPage] = useState(false);
    const[userProfilePage, setUserProfilePage] = useState(false);


    return(
        <div className='navbar'>
            <div className={homePage === true ? 'icon home-icon active' : 'icon home-icon' }
            onClick={() => {
                setHomePage(true);
                setFriendsFeed(false);
                setMarketPage(false);
                setChatPage(false);
                setUserProfilePage(false);
                        }}
            ><UilEstate className="svg"/></div>

            <div className={friendsFeed === true ? 'icon chat-icon active' : 'icon chat-icon' }
            onClick={() => {
                setFriendsFeed(true);
                setHomePage(false);
                setMarketPage(false);
                setChatPage(false);
                setUserProfilePage(false);
                        }}
            ><UilUsersAlt className= "svg"/></div>

            <div className={marketPage === true ? 'icon shop-icon active' : 'icon shop-icon' }
            onClick={() => {
                setMarketPage(true);
                setHomePage(false);
                setFriendsFeed(false);
                setChatPage(false);
                setUserProfilePage(false);
                        }}
            > <UilStore className= "shop-svg" /> </div>

            <div className={chatPage === true ? 'icon bell-icon active' : 'icon bell-icon' }
            onClick={() => {
                setChatPage(true)
                setHomePage(false)
                setFriendsFeed(false)
                setMarketPage(false)
                setUserProfilePage(false)
                        }}
            ><UilCommentAltDots className= "svg" /></div>

            <div className={userProfilePage === true ? 'icon user-icon active' : 'icon user-icon' }
            onClick={() => {
                setUserProfilePage(true);
                setHomePage(false);
                setFriendsFeed(false);
                setMarketPage(false);
                setChatPage(false);
                
                        }}
            ><UilUser className= "svg" /></div>
        </div>
        
    )

}
export default PageNavBar;