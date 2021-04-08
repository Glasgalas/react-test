import React, { useState } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';
import s from './ContactForm.module.css';

const initialState = {
  id: shortid.generate(),
  name: '',
  phoneNumber: '',
  isOpen: false,
};

const ContactForm = ({ contacts, onSubmit }) => {
  const [state, setState] = useState(initialState);
  const { name, phoneNumber, isOpen } = state;

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
      return;
    }
    onSubmit(newContact);
    setState(initialState);
  };

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleModal = () => {
    setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  return (
    <>
      <button className={s.btn} onClick={toggleModal}>
        Add contact
      </button>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalBody}>
            <form onSubmit={handleSubmit} className={s.form}>
              <label className={s.label}>
                <span>Name:</span>
                <input
                  className={s.input}
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
                <span>Phone number:</span>
                <input
                  className={s.input}
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  onChange={handleChange}
                />
              </label>
              <div className={s.buttons}>
                <button className={s.btn} type="submit">
                  Add contact
                </button>
                <button className={s.btn} onClick={toggleModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
