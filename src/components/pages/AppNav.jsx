import style from '../pages/phonebook.module.css';
import { NavLink } from 'react-router-dom';

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
          <NavLink to='/login'>Log-In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
