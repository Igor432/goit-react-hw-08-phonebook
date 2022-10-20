import style from './../phonebook.module.css';
import { useAuth } from 'components/redux/auth/hooks';
import { getContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { logOut } from 'components/redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export const Menu = ({ open, toggleMenu }) => {

const {user} = useAuth()
const {checkLoggedIn} = useAuth()
const contacts = useSelector(getContacts)
console.log(contacts)

const dispatch = useDispatch();

const LogOutUser = () => {
  dispatch(logOut());
  toggleMenu()
};

  return (
    <div className={open ? style.Menu_open : style.Menu_close}>
      <p className={style.menu_item}><PersonIcon />Profile: {user.name}</p>
      <p className={style.menu_item}><EmailIcon/>Email: {user.email}</p>
      <p className={style.menu_item}><PhoneAndroidIcon/>Total Contacts: {checkLoggedIn && contacts.items.length}</p>
      {checkLoggedIn && <Button color="inherit" onClick={LogOutUser}>
                <NavLink to="/" className={style.menu_links}>
                  Log-Out
                </NavLink>
              </Button>}
    </div>
  );
};
