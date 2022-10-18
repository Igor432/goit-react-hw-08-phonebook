import style from '../phonebook/phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from '../redux/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const result = contacts.items.find(contact => contact.name === name);
    if (result) {
      return Notiflix.Notify.failure('The name already exists!');
    }

    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    dispatch(fetchContacts())
    setName('');
    setNumber('');
  };

  return (
    <div class="main_div">
      <form onSubmit={onSubmit} className={style.forma}>
        <p class="input_tag">Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.name_input}
          onChange={onChange}
          value={name}
        />
        <p class="input_tag">Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={style.number_input}
          onChange={onChange}
          value={number}
        />

        <button type="submit" className={style.submit_button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
