import PropTypes from 'prop-types';
import s from './Contact.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

const Contact = ({ contact, onDeleteContact }) => {
  const { name, phoneNumber, id } = contact;
  return (
    <li key={id} className={s.item}>
      <div className={s.wrapper}>
        <span className={s.name}> {name}: </span>
        <span className={s.phoneNumber}>
          <a className={s.phoneNumberLink} href="tel:{phoneNumber}">
            {phoneNumber} <PhoneEnabledIcon />
          </a>
        </span>
      </div>
      <Button
        className={s.btnDelete}
        onClick={onDeleteContact}
        type="button"
        color="primary"
        variant="outlined"
      >
        <DeleteIcon className={s.icon} />
      </Button>
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
