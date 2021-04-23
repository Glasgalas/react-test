import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const handleFilterContact = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = handleFilterContact();
  return (
    <ul>
      {visibleContacts.map(({ id }) => (
        <ContactItem key={id} id={id} />
      ))}
    </ul>
  );
}
