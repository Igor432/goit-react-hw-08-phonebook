import ContactForm from './phonebook/ContactForm';
import style from './phonebook.module.css';
import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';
import { getLoading, getError } from 'components/redux/selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoading);
  const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={style.title_tag}>Phonebook</h1>
      <ContactForm />

      <h2 className={style.title_tag}>Contacts</h2>

      <Filter />
      {isLoading && !Error && <b>Request is Loading...</b>}
      <ContactList />
    </div>
  );
};
