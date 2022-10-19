import style from '../phonebook.module.css';
import { useDispatch } from 'react-redux';
import { setContactFilter } from '../../redux/FilterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const onFilter = e => {
    console.log(e.target.value);
    dispatch(setContactFilter(e.target.value));
  };

  return (
    <div className={style.filter}>
      <h3>Search Contacts</h3>
      <input
        type="filter"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Filter your contacts"
        required
        className={style.filter_input}
        onChange={onFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
