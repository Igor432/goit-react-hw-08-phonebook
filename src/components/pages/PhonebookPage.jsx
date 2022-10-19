import ContactForm from './phonebook/ContactForm';
import style from './phonebook.module.css';
import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';
import { getLoading, getError } from 'components/redux/selectors';
import { useState } from 'react';
import { Menu } from './phonebook/Menu';

export const Phonebook = () => {
  const [menu, setMenu] = useState(false)

const toggleMenu = () => {
  setMenu((prev) => !prev)
}
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoading);
  const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.Phonebook}>
      <div className={style.phonebook_form}>
     {menu && <Menu/>}
        <ContactForm />
      </div>
      <div className={style.phonebook_list}>
        <Filter />
        {isLoading && !Error && <b>Request is Loading...</b>}
        <ContactList />
      </div>
    </div>
  );
};
