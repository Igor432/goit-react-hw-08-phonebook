import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import style from '../pages/phonebook.module.css';
import { useAuth } from 'components/redux/auth/hooks';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';


export default function ButtonAppBar({toggleMenu}) {

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
            <ul>
              <Button color="inherit">
                <NavLink to="/contacts" className={style.menu_links}>
                  Contacts
                </NavLink>
              </Button>
              <Button color="inherit" onClick={LogOutUser}>
                <NavLink to="/" className={style.menu_links}>
                  Log-Out
                </NavLink>
              </Button>
            </ul>
          ) : (
            <ul>
              <Button color="inherit">
                <NavLink to="/register" className={style.menu_links}>
                  Register
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/login" className={style.menu_links}>
                  Log-In
                </NavLink>
              </Button>
            </ul>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

/*

import style from '../pages/phonebook.module.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


const AppNav = () => {
  return (
    <div className={style.appNav}>
      <ul className={style.nav_links}>
        <li className={style.home_link}>
    <NavLink to='/'>Home</NavLink>
        </li>
        <li>
   <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
     <NavLink to='/login' >Log-In</NavLink>

        </li>
      </ul>
    </div>
  );
};

export default AppNav;


*/
