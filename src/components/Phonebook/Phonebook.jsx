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

const Contacts = () => {
  const [contacts, setContacts] = useState(savedContacts);
  const [filter, setFilter] = useState('');
  const firstUse = useRef(true);

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
      <ContactForm onSubmit={handleAddContact} contacts={contacts} />
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default Contacts;
