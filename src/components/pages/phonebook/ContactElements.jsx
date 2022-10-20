import { deleteContact, fetchContacts } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import style from '../phonebook.module.css';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const ContactElement = ({ contact, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
    dispatch(fetchContacts())
  };

  return (
 
    <li key={id} className={style.contact_item}>
      <p class={style.item_name}>{contact.name} </p>{' '}
      <p class={style.item_number}>{contact.number}</p>
    
      <Button variant="outlined" type="button"  class={style.delete_button} startIcon={<DeleteIcon />} onClick={onDelete}>
        Delete
      </Button>
    </li>
   
  );
};

ContactElement.propTypes = {
  contact: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactElement;
