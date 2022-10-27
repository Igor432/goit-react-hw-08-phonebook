import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import style from './phonebook.module.css';
import { useAuth } from 'redux/auth/hooks';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export default function ButtonAppBar({ toggleMenu }) {
  const { checkLoggedIn } = useAuth();

  const dispatch = useDispatch();

  const LogOutUser = () => {
    dispatch(logOut());
    console.log(checkLoggedIn);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
            <NavLink to="/" className={style.menu_links}>
              Home
            </NavLink>
          </Typography>

          {checkLoggedIn ? (
            <ul className={style.link_list}>
              <NavLink to="/contacts" className={style.menu_links}>
                Contacts
              </NavLink>

              <NavLink to="/" className={style.menu_links} onClick={LogOutUser}>
                Log-Out
              </NavLink>
            </ul >
          ) : (
            <ul className={style.link_list}>
              <NavLink to="/register" className={style.menu_links}>
                Register
              </NavLink>

              <NavLink to="/login" className={style.menu_links}>
                Log-In
              </NavLink>
            </ul>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

ButtonAppBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
