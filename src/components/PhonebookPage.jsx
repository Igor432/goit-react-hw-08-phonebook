import ContactForm from '../pages/ContactForm';
import style from './phonebook.module.css';
import Filter from '../pages/Filter';
import ContactList from '../pages/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getLoading, getError } from 'redux/selectors';
import { Spinner } from './Spinner';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoading);
  const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.Phonebook}>
      <div className={style.phonebook_form}>
        <ContactForm />
      </div>
      <div className={style.phonebook_list}>
        <Filter />
        {isLoading && !Error && <Spinner />}
        <ContactList />
      </div>
    </div>
  );
};
