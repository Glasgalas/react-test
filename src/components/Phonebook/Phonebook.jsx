import React, { useState, useEffect } from 'react';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));

    setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = handleFilterContact();

  return (
    <div>
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
