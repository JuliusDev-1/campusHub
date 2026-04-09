import './pagenavbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { UilStore, UilUsersAlt, UilEstate, UilCommentAltDots, UilUser } from '@iconscout/react-unicons';

function PageNavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // This makes the icon glow if the URL matches the path
    const isActive = (path) => location.pathname === path;

    return (
        <div className='navbar'>
            <div className={isActive('/main-app') ? 'icon active' : 'icon'} 
                 onClick={() => navigate('/main-app')}><UilEstate className="svg"/></div>
            
            <div className={isActive('/main-app/friends-feed') ? 'icon active' : 'icon'} 
                 onClick={() => navigate('/main-app/friends-feed')}><UilUsersAlt className="svg"/></div>
            
            <div className={isActive('/main-app/marketplace') ? 'icon shop-icon active' : 'shop-icon icon'} 
                 onClick={() => navigate('/main-app/marketplace')}><UilStore className="svg"/></div>
            
            <div className={isActive('/main-app/messages') ? 'icon active' : 'icon'} 
                 onClick={() => navigate('/main-app/messages')}><UilCommentAltDots className="svg"/></div>
            
            <div className={isActive('/main-app/user-profile') ? 'icon active' : 'icon'} 
                 onClick={() => navigate('/main-app/user-profile')}><UilUser className="svg"/></div>
        </div>
    );
}
export default PageNavBar;