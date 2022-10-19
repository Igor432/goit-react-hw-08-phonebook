import style from './../phonebook.module.css';
import { useAuth } from 'components/redux/auth/hooks';
import { getContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

export const Menu = ({ open }) => {

const {user} = useAuth()
const contacts = useSelector(getContacts)
console.log(contacts)

  return (
    <div className={open ? style.Menu_open : style.Menu_close}>
      <h3>Profile: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Total Contacts: {contacts.items.length}</p>
    </div>
  );
};
