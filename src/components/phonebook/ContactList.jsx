import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';
import { getItems, getFilter } from '../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const contactItems = contacts.contacts.items;

  const filtered = () => {
    const filterValue = filter.filter;
    return contactItems.filter(contact =>
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
