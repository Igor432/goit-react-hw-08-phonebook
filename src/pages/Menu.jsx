import style from '../components/phonebook.module.css';
import { useAuth } from 'redux/auth/hooks';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

export const Menu = ({ open, toggleMenu }) => {
  const { user } = useAuth();
  const { checkLoggedIn } = useAuth();
  const ref = useRef()
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const dispatch = useDispatch();

  const LogOutUser = () => {
    dispatch(logOut());
    toggleMenu();
  };

  useOnClickOutside(ref, () => toggleMenu());


  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  return (
    <div ref={ref} className={open ? style.Menu_open : style.Menu_close}>
      <p className={style.menu_item}>
        <PersonIcon />
        Profile: {user.name}
      </p>
      <p className={style.menu_item}>
        <EmailIcon />
        Email: {user.email}
      </p>
      <p className={style.menu_item}>
        <PhoneAndroidIcon />
        Total Contacts: {checkLoggedIn && contacts.items.length}
      </p>
      {checkLoggedIn && (
     
          <NavLink to="/" className={style.menu_links} onClick={LogOutUser}>
            Log-Out
          </NavLink>
      
      )}
    </div>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
