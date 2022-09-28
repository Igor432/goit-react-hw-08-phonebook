import style from '../phonebook/phonebook.module.css';
import { useDispatch } from 'react-redux';
import { setContactFilter } from '../redux/FilterSlice';


const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    console.log(e.target.value);
    dispatch(setContactFilter(e.target.value));
  };

  return (
    <div className={style.filter}>
      <input
        type="filter"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Filter your contacts"
        required
        className={style.filter_input}
        onChange={onFilter}
      />
    </div>
  );
};


export default Filter;
