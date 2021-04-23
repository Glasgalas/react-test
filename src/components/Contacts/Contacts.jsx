import s from './Contacts.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function Contacts() {
  return (
    <>
      <h1 className={s.contacts}>Контакты</h1>;
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
