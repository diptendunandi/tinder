import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link, useHistory } from "react-router-dom";

const Header = ({backButton}) => {
  const history=useHistory();
    return ( 
    <div className='header'>
         {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
      <img className="header_logo"
       src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="tinder-logo" />
      </Link>
      <Link to="/chat">
      <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
        </Link>
         </div>
    )
}

export default Header;