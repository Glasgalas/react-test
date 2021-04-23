import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/actions';

const TodosForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: value,
      created: Date.now(),
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setValue('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>создать новую заметку</legend>
          <input type="text" value={value} onChange={handleChange} />
          <button>Создать заметку</button>
        </fieldset>
      </form>
    </div>
  );
};

export default TodosForm;
