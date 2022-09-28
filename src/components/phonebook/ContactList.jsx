import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';
import { getItems, getFilter } from '../redux/selectors';

const ContactList = () => {
  const items = useSelector(getItems);

  const contactList = items.contacts;
  const filter = useSelector(getFilter);

  const filtered = () => {
    const filterValue = filter.filter;
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {filtered().map(contact => (
          <ContactElement contact={contact} key={contact.id} id={contact.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
