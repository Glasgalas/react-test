import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/actions';
import s from './ContactForm.module.css';
import shortid from 'shortid';

const initialState = {
  id: shortid.generate(),
  name: '',
  phoneNumber: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { name, phoneNumber } = state;
  const [isOpen, setOpen] = useState(false);

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      phoneNumber,
    };

    dispatch(addContact(newContact));

    toggleModal();
    setState(initialState);
  };

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <button className={s.btn} onClick={toggleModal}>
        Добавить новый контакт
      </button>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalBody}>
            <form onSubmit={handleSubmit} className={s.form}>
              <label className={s.label}>
                <span>Имя контакта:</span>
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
                <span>Номер телефона:</span>
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
                  Добавить
                </button>
                <button className={s.btn} onClick={toggleModal}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
