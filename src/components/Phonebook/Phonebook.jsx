import React, { useState, useEffect, useRef } from 'react';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

import s from './Phonebook.module.css';

const savedContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

const closeInputOrForm = {
  closeInput: false,
  closeForm: false,
};

const Contacts = () => {
  const [showInput, setShowInput] = useState(false);
  const handleShow = () => {
    setShowInput(!showInput);
  };

  const [contacts, setContacts] = useState(savedContacts);
  const [filter, setFilter] = useState('');
  const firstUse = useRef(true);

  const [close, setClose] = useState(closeInputOrForm);
  const { closeInput, closeForm } = close;
  const onCloseInput = () => {
    if (showInput && closeInput) {
      alert('Please close the contact search box first');
    }
    setClose({
      closeInput: true,
      closeForm: false,
    });
  };

  const onCloseForm = () => {
    if (showInput && closeForm) {
      alert('Please close the contact search box first');
    }
    setClose({
      closeInput: false,
      closeForm: true,
    });
  };

  useEffect(() => {
    if (firstUse.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

      if (parsedContacts) {
        setContacts(parsedContacts);
      }

      firstUse.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = handleFilterContact();

  return (
    <div className={s.phonebook}>
      <div className={s.wrap}>
        <Filter
          value={filter}
          onChange={handleFilter}
          showInput={showInput}
          onChangeShow={handleShow}
          onChangeForm={onCloseForm}
        />

        <ContactForm
          onSubmit={handleAddContact}
          contacts={contacts}
          showInput={showInput}
          onChangeShow={handleShow}
          onChangeInput={onCloseInput}
        />
      </div>
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default Contacts;
