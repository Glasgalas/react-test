import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  const { name, phoneNumber, id } = contact;
  return (
    <li key={id} className={s.item}>
      <div className={s.wrapper}>
        <span className={s.name}> {name}: </span>
        <span className={s.phoneNumber}> {phoneNumber}</span>
      </div>
      <button className={s.btnDelete} type="button" onClick={onDeleteContact}>
        delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }),
};

export default Contact;
