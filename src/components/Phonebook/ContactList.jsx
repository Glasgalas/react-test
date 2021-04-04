import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      <h2>Contacts</h2>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
