import ContactElement from './ContactElements';
import style from '../phonebook.module.css';
import { getFilter, getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('Filter: ' + filter);
  console.log(contactsState);

  const filtered = () => {
    return contactsState.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={style.contacts}>
      <h2 className={style.title_tag}>Contacts</h2>
      <tr className={style.table_row}>
        <th className={style.table_cell}>Name:</th>
        <th className={style.table_cell}>Number:</th>
        <th className={style.table_cell}>Delete:</th>
      </tr>
      <ul className={style.contacts_list}>
        {filtered().map(contact => (
          <ContactElement contact={contact} key={contact.id} id={contact.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
