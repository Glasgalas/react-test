import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/actions';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const getContactItem = id => state =>
  state.contacts.items.find(contact => contact.id === id);

export default function ContactItem({ id }) {
  const dispatch = useDispatch();
  const { name, phoneNumber } = useSelector(getContactItem(id));

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <span className={s.name}> {name} </span>
        <span className={s.phoneNumber}> {phoneNumber}</span>
      </div>
      <button className={s.btnDelete} type="button" onClick={handleDelete}>
        удалить
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }),
};
