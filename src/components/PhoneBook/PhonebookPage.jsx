import ContactForm from '../../pages/ContactForm/ContactForm';
import style from '../PhoneBook/Phonebook.module.css';
import Filter from '../../pages/Filter/Filter';
import ContactList from '../../pages/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getLoading, getError } from 'redux/selectors';
import { Spinner } from '../Spinner';

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
