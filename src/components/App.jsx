import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import ContactForm from '../components/phonebook/ContactForm';
import style from './phonebook/phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { getLoading, getError } from './redux/selectors';
import { useEffect } from 'react';


export function App() {

const dispatch = useDispatch()

const isLoading = useSelector(getLoading)
const Error = useSelector(getError)


useEffect(() => {
dispatch(fetchContacts())
}, [dispatch ])



  return (
    <div className={style.main}>
        <h1 className={style.title_tag}>Phonebook</h1>
        <ContactForm />

        <h2 className={style.title_tag}>Contacts</h2>

        <Filter />
        {isLoading && !Error && <b>Request is Loading...</b>}
        <ContactList />
  
    </div>
  );
}

export default App;
