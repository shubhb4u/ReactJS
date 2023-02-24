import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


const Header = () => {
  return (
    <div className="header">

      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/>
        <div className="header__search">
          <SearchIcon/>
          <input type="text"/>
        </div>
        
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title = "Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title = "My network"/>
        <HeaderOption Icon={BusinessCenterIcon} title = "BusinessCenter"/>
        <HeaderOption Icon={ChatIcon} title = "Chat"/>
        <HeaderOption Icon={NotificationsActiveIcon} title = "Notifications"/>
        <HeaderOption avatar="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" title="me"/>
      </div>

        
    </div>
  )
}

export default Header