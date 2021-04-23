import React, { useState } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';
import s from './ContactForm.module.css';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';

const initialState = {
  id: shortid.generate(),
  name: '',
  phoneNumber: '',
  isOpen: false,
  show: false,
};

const ContactForm = ({
  contacts,
  onSubmit,
  showInput,
  onChangeShow,
  onChangeInput,
}) => {
  const [state, setState] = useState(initialState);
  const { name, phoneNumber, isOpen, show } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      phoneNumber,
    };

    const checkName = contacts.find(
      contact => contact.name === newContact.name,
    );

    if (checkName) {
      alert(`Contact witn name ${name} already exists`);
      setState(initialState);
      onChangeShow();
      return;
    }
    onSubmit(newContact);
    setState(initialState);
    onChangeShow();
  };

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleModal = () => {
    if (showInput) {
      setState({ show: false });
    }
    setState({
      id: shortid.generate(),
      name: '',
      phoneNumber: '',
      isOpen: !isOpen,
      show: !show,
    });
    onChangeShow();
  };

  return (
    <>
      <Button
        className={s.btn}
        onClick={!showInput || show ? toggleModal : onChangeInput}
        color="primary"
        variant="outlined"
      >
        <AddIcon className={s.icon} />
      </Button>

      <div className={s.modal}>
        <div
          className={isOpen ? [s.modalBody, s.active].join(' ') : s.modalBody}
        >
          <div>
            <form onSubmit={handleSubmit} className={s.form}>
              <label className={s.label}>
                <input
                  className={s.input}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={handleChange}
                />
              </label>

              <label>
                <input
                  className={s.input}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={phoneNumber}
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  onChange={handleChange}
                />
              </label>
              <div className={s.buttons}>
                <Button
                  color="primary"
                  variant="outlined"
                  className={s.btn}
                  type="submit"
                >
                  <PersonAddIcon className={s.icon} />
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  className={s.btn}
                  onClick={toggleModal}
                >
                  <CancelIcon className={s.icon} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
