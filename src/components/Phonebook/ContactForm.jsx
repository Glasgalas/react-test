import React, { useState } from 'react';
import shortid from 'shortid';
import styles from './Modal.module.css';

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

  const handleModalOpen = e => {
    setState(prev => ({
      ...prev,
      isOpen: true,
    }));
  };

  const handleModalClose = e => {
    setState(prev => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <>
      <button onClick={handleModalOpen}>Add contact</button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                <span>Name:</span>
                <input
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
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  onChange={handleChange}
                />
              </label>
              <div className={styles.btn}>
                <button type="submit">Add contact</button>
                <button onClick={handleModalClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
