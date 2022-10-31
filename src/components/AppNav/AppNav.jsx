import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import style from '../AppNav/AppNav.module.css';
import { useAuth } from 'redux/auth/hooks';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Link = styled(NavLink)`
padding: 10px 5px 10px 5px;
border-radius: 4px;


  &.active {
    color: black;
    background-color: yellow;
  }
`;

export default function ButtonAppBar({ toggleMenu }) {
  const { checkLoggedIn } = useAuth();

  const dispatch = useDispatch();

  const LogOutUser = () => {
    dispatch(logOut());
    console.log(checkLoggedIn);
  };



  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" className={style.menu_links}>
              Home
            </Link>
          </Typography>

          {checkLoggedIn ? (
            <ul className={style.link_list}>
              <Link to="/contacts" className={style.menu_links}>
                Contacts
              </Link>

              <NavLink to="/" className={style.menu_links} onClick={LogOutUser}>
                Log-Out
              </NavLink>
            </ul >
          ) : (
            <ul className={style.link_list}>
              <Link to="/register" className={style.menu_links}>
                Register
              </Link>

              <Link to="/login" className={style.menu_links}>
                Log-In
              </Link>
            </ul>
          )}
        </Toolbar>
      </AppBar>
  );
}

ButtonAppBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
