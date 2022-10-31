import style from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { setContactFilter } from '../../redux/FilterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const onFilter = e => {
    console.log(e.target.value);
    dispatch(setContactFilter(e.target.value));
  };

  return (
    <div className={style.filter}>
      <h3 className={style.search_tag}>Search Contacts</h3>
      <SearchIcon />
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
