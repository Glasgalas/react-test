import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/todos/actions';
import moment from 'moment';

const getTodoItem = id => state =>
  state.todos.items.find(todo => todo.id === id);

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const { text, created, isDone } = useSelector(getTodoItem(id));

  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <button onClick={handleDelete}>x</button>
      <p>Заметка: {text}</p>
      <p>Создана: {moment(created).format('DD-MM-YY hh:mm:ss')}</p>

      <label>
        <span>выполнена </span>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  );
};

export default TodoItem;
