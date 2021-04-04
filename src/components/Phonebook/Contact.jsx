import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  const { name, phoneNumber, id } = contact;
  return (
    <li key={id} className="item">
      <span className="name"> {name}: </span>
      <span className="phoneNumber"> {phoneNumber}</span>
      <button
        className={styles.btnDelete}
        type="button"
        onClick={onDeleteContact}
      >
        delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
};

export default Contact;
